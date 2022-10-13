from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import systemtemplatedescription


@dataclass_json
@dataclass
class GetSystemTemplateResponse:
    description: Optional[systemtemplatedescription.SystemTemplateDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    
