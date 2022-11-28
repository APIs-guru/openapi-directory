from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WaitAndContinueSpecification:
    r"""WaitAndContinueSpecification
    Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input. 
    """
    
    continue_response: ResponseSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('continueResponse') }})
    waiting_response: ResponseSpecification = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('waitingResponse') }})
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    still_waiting_response: Optional[StillWaitingResponseSpecification] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stillWaitingResponse') }})
    
