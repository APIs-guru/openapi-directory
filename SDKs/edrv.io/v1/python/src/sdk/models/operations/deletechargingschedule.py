from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeletechargingscheduleRequestBody:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    

@dataclass
class DeletechargingscheduleRequest:
    request: DeletechargingscheduleRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class Deletechargingschedule201ApplicationJSON:
    command: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    

@dataclass
class DeletechargingscheduleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    deletechargingschedule_201_application_json_object: Optional[Deletechargingschedule201ApplicationJSON] = field(default=None)
    
