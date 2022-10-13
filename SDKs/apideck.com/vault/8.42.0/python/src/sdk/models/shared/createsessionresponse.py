from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateSessionResponseData:
    session_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session_token' }})
    session_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session_uri' }})
    

@dataclass_json
@dataclass
class CreateSessionResponse:
    data: CreateSessionResponseData = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    status_code: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status_code' }})
    
