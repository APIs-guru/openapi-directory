from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetChatHistoryUsingPostQueryParams:
    end: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    start: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetChatHistoryUsingPost200ApplicationJSONDataMessages:
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    user_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userName') }})
    

@dataclass_json
@dataclass
class GetChatHistoryUsingPost200ApplicationJSONData:
    messages: Optional[List[GetChatHistoryUsingPost200ApplicationJSONDataMessages]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('messages') }})
    

@dataclass_json
@dataclass
class GetChatHistoryUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[GetChatHistoryUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChatHistoryUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChatHistoryUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class GetChatHistoryUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class GetChatHistoryUsingPostRequest:
    query_params: GetChatHistoryUsingPostQueryParams = field()
    

@dataclass
class GetChatHistoryUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    get_chat_history_using_post_200_application_json_object: Optional[GetChatHistoryUsingPost200ApplicationJSON] = field(default=None)
    get_chat_history_using_post_400_application_json_object: Optional[GetChatHistoryUsingPost400ApplicationJSON] = field(default=None)
    get_chat_history_using_post_401_application_json_object: Optional[GetChatHistoryUsingPost401ApplicationJSON] = field(default=None)
    get_chat_history_using_post_500_application_json_object: Optional[GetChatHistoryUsingPost500ApplicationJSON] = field(default=None)
    
