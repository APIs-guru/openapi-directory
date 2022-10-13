from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import absolutetimerange
from . import participantrole_enum
from . import relativetimerange
from . import transcriptfiltertype_enum


@dataclass_json
@dataclass
class TranscriptFilter:
    absolute_time_range: Optional[absolutetimerange.AbsoluteTimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AbsoluteTimeRange' }})
    negate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Negate' }})
    participant_role: Optional[participantrole_enum.ParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParticipantRole' }})
    relative_time_range: Optional[relativetimerange.RelativeTimeRange] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RelativeTimeRange' }})
    targets: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Targets' }})
    transcript_filter_type: transcriptfiltertype_enum.TranscriptFilterTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscriptFilterType' }})
    
