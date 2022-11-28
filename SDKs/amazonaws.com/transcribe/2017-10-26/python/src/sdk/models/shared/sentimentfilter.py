from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SentimentFilter:
    r"""SentimentFilter
    An object that enables you to specify a particular customer or agent sentiment. If at least 50 percent of the conversation turns (the back-and-forth between two speakers) in a specified time period match the specified sentiment, Amazon Transcribe will consider the sentiment a match.
    """
    
    sentiments: List[SentimentValueEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Sentiments') }})
    absolute_time_range: Optional[AbsoluteTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AbsoluteTimeRange') }})
    negate: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Negate') }})
    participant_role: Optional[ParticipantRoleEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParticipantRole') }})
    relative_time_range: Optional[RelativeTimeRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RelativeTimeRange') }})
    
