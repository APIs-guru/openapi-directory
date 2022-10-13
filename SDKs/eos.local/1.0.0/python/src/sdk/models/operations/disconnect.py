from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DisconnectRequestBody:
    endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    

@dataclass
class DisconnectRequest:
    request: Optional[DisconnectRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisconnectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    disconnect_200_application_json_string: Optional[str] = field(default=None)
    
