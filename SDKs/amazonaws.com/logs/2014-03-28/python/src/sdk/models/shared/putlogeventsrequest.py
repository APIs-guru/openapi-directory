from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PutLogEventsRequest:
    log_events: List[InputLogEvent] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logEvents') }})
    log_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logGroupName') }})
    log_stream_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('logStreamName') }})
    sequence_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sequenceToken') }})
    
