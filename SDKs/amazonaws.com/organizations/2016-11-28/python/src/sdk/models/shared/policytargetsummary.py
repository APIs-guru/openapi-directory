from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import targettype_enum


@dataclass_json
@dataclass
class PolicyTargetSummary:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Arn' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    target_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetId' }})
    type: Optional[targettype_enum.TargetTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
