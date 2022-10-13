from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CancelreservationRequestBody:
    reservation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reservation' }})
    

@dataclass
class CancelreservationRequest:
    request: CancelreservationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class Cancelreservation201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class CancelreservationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    cancelreservation_201_application_json_object: Optional[Cancelreservation201ApplicationJSON] = field(default=None)
    
