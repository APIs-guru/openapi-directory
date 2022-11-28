from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateSessionResponseData:
    session_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('session_token') }})
    session_uri: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('session_uri') }})
    

@dataclass_json
@dataclass
class CreateSessionResponse:
    data: CreateSessionResponseData = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    status_code: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('status_code') }})
    
