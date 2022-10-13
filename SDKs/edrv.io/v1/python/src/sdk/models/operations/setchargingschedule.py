from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class SetchargingscheduleRequest:
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class Setchargingschedule201ApplicationJSON:
    command: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    

@dataclass
class SetchargingscheduleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    setchargingschedule_201_application_json_object: Optional[Setchargingschedule201ApplicationJSON] = field(default=None)
    
