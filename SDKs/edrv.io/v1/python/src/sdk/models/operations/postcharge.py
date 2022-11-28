from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PostChargePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PostChargeRequestBodyActionEnum(str, Enum):
    START = "START"
    STOP = "STOP"


@dataclass_json
@dataclass
class PostChargeRequestBody:
    action: PostChargeRequestBodyActionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('action') }})
    

@dataclass_json
@dataclass
class PostCharge200ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class PostChargeRequest:
    path_params: PostChargePathParams = field()
    request: PostChargeRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostChargeResponse:
    content_type: str = field()
    status_code: int = field()
    post_charge_200_application_json_object: Optional[PostCharge200ApplicationJSON] = field(default=None)
    
