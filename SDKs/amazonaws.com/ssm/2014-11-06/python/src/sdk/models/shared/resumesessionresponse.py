from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResumeSessionResponse:
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionId') }})
    stream_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamUrl') }})
    token_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TokenValue') }})
    
