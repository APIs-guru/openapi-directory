from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Rule:
    r"""Rule
    A condition in the call between the customer and the agent that you want to filter for.
    """
    
    interruption_filter: Optional[InterruptionFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InterruptionFilter') }})
    non_talk_time_filter: Optional[NonTalkTimeFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NonTalkTimeFilter') }})
    sentiment_filter: Optional[SentimentFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SentimentFilter') }})
    transcript_filter: Optional[TranscriptFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TranscriptFilter') }})
    
