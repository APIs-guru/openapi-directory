from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostTokensRequestBodyChannelEnum(str, Enum):
    PHYSICAL = "physical"
    SLACK = "slack"
    TELEGRAM = "telegram"
    SMS = "sms"


@dataclass_json
@dataclass
class PostTokensRequestBody:
    active: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    channel: PostTokensRequestBodyChannelEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    driver: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('driver') }})
    physical_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalId') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    

@dataclass_json
@dataclass
class PostTokens201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ok') }})
    result: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class PostTokensRequest:
    request: PostTokensRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostTokensResponse:
    content_type: str = field()
    status_code: int = field()
    post_tokens_201_application_json_object: Optional[PostTokens201ApplicationJSON] = field(default=None)
    
