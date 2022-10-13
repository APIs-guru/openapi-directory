from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import canaryrunstate_enum
from . import canaryrunstatereasoncode_enum


@dataclass_json
@dataclass
class CanaryRunStatus:
    state: Optional[canaryrunstate_enum.CanaryRunStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateReason' }})
    state_reason_code: Optional[canaryrunstatereasoncode_enum.CanaryRunStateReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateReasonCode' }})
    
