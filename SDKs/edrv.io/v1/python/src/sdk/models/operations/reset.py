from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResetRequestBody:
    chargestation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargestation' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class ResetRequest:
    request: ResetRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class Reset201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class ResetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reset_201_application_json_object: Optional[Reset201ApplicationJSON] = field(default=None)
    
