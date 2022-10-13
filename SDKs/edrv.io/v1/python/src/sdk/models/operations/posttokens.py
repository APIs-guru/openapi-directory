from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class PostTokensRequestBodyChannelEnum(str, Enum):
    PHYSICAL = "physical"
    SLACK = "slack"
    TELEGRAM = "telegram"
    SMS = "sms"


@dataclass_json
@dataclass
class PostTokensRequestBody:
    active: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active' }})
    channel: PostTokensRequestBodyChannelEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    driver: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driver' }})
    physical_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalId' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostTokensRequest:
    request: PostTokensRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostTokens201ApplicationJSON:
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    ok: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ok' }})
    result: Optional[List[Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class PostTokensResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    post_tokens_201_application_json_object: Optional[PostTokens201ApplicationJSON] = field(default=None)
    
