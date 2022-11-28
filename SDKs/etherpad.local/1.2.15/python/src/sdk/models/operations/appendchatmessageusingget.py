from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class AppendChatMessageUsingGetQueryParams:
    author_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authorID', 'style': 'form', 'explode': True }})
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'time', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AppendChatMessageUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class AppendChatMessageUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class AppendChatMessageUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class AppendChatMessageUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class AppendChatMessageUsingGetRequest:
    query_params: AppendChatMessageUsingGetQueryParams = field()
    

@dataclass
class AppendChatMessageUsingGetResponse:
    content_type: str = field()
    status_code: int = field()
    append_chat_message_using_get_200_application_json_object: Optional[AppendChatMessageUsingGet200ApplicationJSON] = field(default=None)
    append_chat_message_using_get_400_application_json_object: Optional[AppendChatMessageUsingGet400ApplicationJSON] = field(default=None)
    append_chat_message_using_get_401_application_json_object: Optional[AppendChatMessageUsingGet401ApplicationJSON] = field(default=None)
    append_chat_message_using_get_500_application_json_object: Optional[AppendChatMessageUsingGet500ApplicationJSON] = field(default=None)
    
