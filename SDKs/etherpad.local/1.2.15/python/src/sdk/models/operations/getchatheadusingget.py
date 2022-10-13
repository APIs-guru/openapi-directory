from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetChatHeadUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetChatHeadUsingGetRequest:
    query_params: GetChatHeadUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetChatHeadUsingGet200ApplicationJSONDataChatHead:
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userName' }})
    

@dataclass_json
@dataclass
class GetChatHeadUsingGet200ApplicationJSONData:
    chat_head: Optional[GetChatHeadUsingGet200ApplicationJSONDataChatHead] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'chatHead' }})
    

@dataclass_json
@dataclass
class GetChatHeadUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[GetChatHeadUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChatHeadUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChatHeadUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetChatHeadUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetChatHeadUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_chat_head_using_get_200_application_json_object: Optional[GetChatHeadUsingGet200ApplicationJSON] = field(default=None)
    get_chat_head_using_get_400_application_json_object: Optional[GetChatHeadUsingGet400ApplicationJSON] = field(default=None)
    get_chat_head_using_get_401_application_json_object: Optional[GetChatHeadUsingGet401ApplicationJSON] = field(default=None)
    get_chat_head_using_get_500_application_json_object: Optional[GetChatHeadUsingGet500ApplicationJSON] = field(default=None)
    
