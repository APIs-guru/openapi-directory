from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class PatchTokenPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PatchTokenRequestBodyChannelEnum(str, Enum):
    PHYSICAL = "physical"
    SLACK = "slack"
    TELEGRAM = "telegram"
    SMS = "sms"


@dataclass_json
@dataclass
class PatchTokenRequestBody:
    active: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    channel: Optional[PatchTokenRequestBodyChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('driver') }})
    physical_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalId') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PatchToken201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class PatchTokenRequest:
    path_params: PatchTokenPathParams = field()
    request: PatchTokenRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchTokenResponse:
    content_type: str = field()
    status_code: int = field()
    patch_token_201_application_json_object: Optional[PatchToken201ApplicationJSON] = field(default=None)
    
