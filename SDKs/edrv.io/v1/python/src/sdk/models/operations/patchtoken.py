from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PatchTokenPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PatchTokenRequestBodyChannelEnum(str, Enum):
    PHYSICAL = "physical"
    SLACK = "slack"
    TELEGRAM = "telegram"
    SMS = "sms"


@dataclass_json
@dataclass
class PatchTokenRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    channel: Optional[PatchTokenRequestBodyChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driver' }})
    physical_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalId' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PatchTokenRequest:
    path_params: PatchTokenPathParams = field(default=None)
    request: PatchTokenRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PatchToken201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    result: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class PatchTokenResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    patch_token_201_application_json_object: Optional[PatchToken201ApplicationJSON] = field(default=None)
    
