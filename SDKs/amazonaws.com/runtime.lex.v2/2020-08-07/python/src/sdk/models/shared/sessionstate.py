from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SessionState:
    r"""SessionState
    The state of the user's session with Amazon Lex V2.
    """
    
    active_contexts: Optional[List[ActiveContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeContexts') }})
    dialog_action: Optional[DialogAction] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dialogAction') }})
    intent: Optional[Intent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('intent') }})
    originating_request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('originatingRequestId') }})
    session_attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionAttributes') }})
    
