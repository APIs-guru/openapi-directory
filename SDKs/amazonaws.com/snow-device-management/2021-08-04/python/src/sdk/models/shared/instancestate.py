from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instancestatename_enum


@dataclass_json
@dataclass
class InstanceState:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    name: Optional[instancestatename_enum.InstanceStateNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
