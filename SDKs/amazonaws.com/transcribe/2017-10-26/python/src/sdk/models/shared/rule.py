from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import interruptionfilter
from . import nontalktimefilter
from . import sentimentfilter
from . import transcriptfilter


@dataclass_json
@dataclass
class Rule:
    interruption_filter: Optional[interruptionfilter.InterruptionFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InterruptionFilter' }})
    non_talk_time_filter: Optional[nontalktimefilter.NonTalkTimeFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NonTalkTimeFilter' }})
    sentiment_filter: Optional[sentimentfilter.SentimentFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SentimentFilter' }})
    transcript_filter: Optional[transcriptfilter.TranscriptFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TranscriptFilter' }})
    
