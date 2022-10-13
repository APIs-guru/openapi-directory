from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import canarystate_enum
from . import canarystatereasoncode_enum


@dataclass_json
@dataclass
class CanaryStatus:
    state: Optional[canarystate_enum.CanaryStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateReason' }})
    state_reason_code: Optional[canarystatereasoncode_enum.CanaryStateReasonCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateReasonCode' }})
    
