from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TranscriptFilter:
    r"""TranscriptFilter
    Matches the output of the transcription to either the specific phrases that you specify, or the intent of the phrases that you specify.
    """
    
    targets: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Targets') }})
    transcript_filter_type: TranscriptFilterTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptFilterType') }})
    absolute_time_range: Optional[AbsoluteTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbsoluteTimeRange') }})
    negate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Negate') }})
    participant_role: Optional[ParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParticipantRole') }})
    relative_time_range: Optional[RelativeTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelativeTimeRange') }})
    
