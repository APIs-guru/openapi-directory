from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import absolutetimerange
from . import participantrole_enum
from . import relativetimerange


@dataclass_json
@dataclass
class InterruptionFilter:
    absolute_time_range: Optional[absolutetimerange.AbsoluteTimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AbsoluteTimeRange' }})
    negate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Negate' }})
    participant_role: Optional[participantrole_enum.ParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParticipantRole' }})
    relative_time_range: Optional[relativetimerange.RelativeTimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelativeTimeRange' }})
    threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Threshold' }})
    
