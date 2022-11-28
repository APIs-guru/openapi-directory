from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StillWaitingResponseSpecification:
    r"""StillWaitingResponseSpecification
    Defines the messages that Amazon Lex sends to a user to remind them that the bot is waiting for a response.
    """
    
    frequency_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('frequencyInSeconds') }})
    message_groups: List[MessageGroup] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('messageGroups') }})
    timeout_in_seconds: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeoutInSeconds') }})
    allow_interrupt: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowInterrupt') }})
    
