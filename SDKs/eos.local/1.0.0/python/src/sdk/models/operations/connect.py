from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ConnectRequestBody:
    endpoint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    

@dataclass
class ConnectRequest:
    request: Optional[ConnectRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConnectResponse:
    content_type: str = field()
    status_code: int = field()
    connect_200_application_json_string: Optional[str] = field(default=None)
    
