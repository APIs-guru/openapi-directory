from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RemotestartRequestBody:
    chargestation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargestation' }})
    connector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connector' }})
    driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driver' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    

@dataclass
class RemotestartRequest:
    request: RemotestartRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class Remotestart201ApplicationJSON:
    command: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    

@dataclass
class RemotestartResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    remotestart_201_application_json_object: Optional[Remotestart201ApplicationJSON] = field(default=None)
    
