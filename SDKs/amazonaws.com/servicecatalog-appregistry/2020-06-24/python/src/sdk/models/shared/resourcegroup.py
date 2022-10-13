from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import resourcegroupstate_enum


@dataclass_json
@dataclass
class ResourceGroup:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    state: Optional[resourcegroupstate_enum.ResourceGroupStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
