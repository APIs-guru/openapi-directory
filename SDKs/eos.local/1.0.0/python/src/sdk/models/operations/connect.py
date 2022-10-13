from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ConnectRequestBody:
    endpoint: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endpoint' }})
    

@dataclass
class ConnectRequest:
    request: Optional[ConnectRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConnectResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    connect_200_application_json_string: Optional[str] = field(default=None)
    
