from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TestRenderEmailTemplateResponse:
    rendered_template: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RenderedTemplate' }})
    
