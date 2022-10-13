from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ReserveRequestBody:
    chargestation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chargestation' }})
    connector: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connector' }})
    driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driver' }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate' }})
    token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'token' }})
    

@dataclass
class ReserveRequest:
    request: ReserveRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class Reserve201ApplicationJSON:
    command: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'command' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    

@dataclass
class ReserveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    reserve_201_application_json_object: Optional[Reserve201ApplicationJSON] = field(default=None)
    
