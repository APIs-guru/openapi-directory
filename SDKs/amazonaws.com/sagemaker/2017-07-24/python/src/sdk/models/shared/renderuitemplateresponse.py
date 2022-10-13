from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import renderingerror


@dataclass_json
@dataclass
class RenderUITemplateResponse:
    errors: List[renderingerror.RenderingError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    rendered_content: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RenderedContent' }})
    
