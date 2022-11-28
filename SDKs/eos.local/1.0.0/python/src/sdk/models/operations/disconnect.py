from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DisconnectRequestBody:
    endpoint: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endpoint') }})
    

@dataclass
class DisconnectRequest:
    request: Optional[DisconnectRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisconnectResponse:
    content_type: str = field()
    status_code: int = field()
    disconnect_200_application_json_string: Optional[str] = field(default=None)
    
