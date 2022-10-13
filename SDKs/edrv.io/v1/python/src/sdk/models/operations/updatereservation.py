from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class UpdatereservationPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdatereservationRequestBody:
    connector: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connector' }})
    driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driver' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    evse: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evse' }})
    

@dataclass
class UpdatereservationRequest:
    path_params: UpdatereservationPathParams = field(default=None)
    request: UpdatereservationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class Updatereservation201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class UpdatereservationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    updatereservation_201_application_json_object: Optional[Updatereservation201ApplicationJSON] = field(default=None)
    
