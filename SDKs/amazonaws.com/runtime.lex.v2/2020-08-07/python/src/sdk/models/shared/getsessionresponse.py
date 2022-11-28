from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetSessionResponse:
    interpretations: Optional[List[Interpretation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('interpretations') }})
    messages: Optional[List[Message]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionId') }})
    session_state: Optional[SessionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sessionState') }})
    
