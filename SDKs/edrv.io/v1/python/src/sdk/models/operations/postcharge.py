from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json


@dataclass
class PostChargePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PostChargeRequestBodyActionEnum(str, Enum):
    START = "START"
    STOP = "STOP"


@dataclass_json
@dataclass
class PostChargeRequestBody:
    action: PostChargeRequestBodyActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    

@dataclass
class PostChargeRequest:
    path_params: PostChargePathParams = field(default=None)
    request: PostChargeRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostCharge200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class PostChargeResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_charge_200_application_json_object: Optional[PostCharge200ApplicationJSON] = field(default=None)
    
