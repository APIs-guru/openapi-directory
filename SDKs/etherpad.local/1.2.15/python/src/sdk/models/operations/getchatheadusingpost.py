from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetChatHeadUsingPostQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChatHeadUsingPostRequest:
    query_params: GetChatHeadUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetChatHeadUsingPost200ApplicationJSONDataChatHead:
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    

@dataclass_json
@dataclass
class GetChatHeadUsingPost200ApplicationJSONData:
    chat_head: Optional[GetChatHeadUsingPost200ApplicationJSONDataChatHead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chatHead' }})
    

@dataclass_json
@dataclass
class GetChatHeadUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[GetChatHeadUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChatHeadUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChatHeadUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChatHeadUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetChatHeadUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_chat_head_using_post_200_application_json_object: Optional[GetChatHeadUsingPost200ApplicationJSON] = field(default=None)
    get_chat_head_using_post_400_application_json_object: Optional[GetChatHeadUsingPost400ApplicationJSON] = field(default=None)
    get_chat_head_using_post_401_application_json_object: Optional[GetChatHeadUsingPost401ApplicationJSON] = field(default=None)
    get_chat_head_using_post_500_application_json_object: Optional[GetChatHeadUsingPost500ApplicationJSON] = field(default=None)
    
