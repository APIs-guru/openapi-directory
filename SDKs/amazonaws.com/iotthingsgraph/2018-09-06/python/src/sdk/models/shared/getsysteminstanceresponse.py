from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import systeminstancedescription


@dataclass_json
@dataclass
class GetSystemInstanceResponse:
    description: Optional[systeminstancedescription.SystemInstanceDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    
