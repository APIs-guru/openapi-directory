from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class SendClientsMessageUsingPostQueryParams:
    msg: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'msg', 'style': 'form', 'explode': True }})
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class SendClientsMessageUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class SendClientsMessageUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class SendClientsMessageUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass_json
@dataclass
class SendClientsMessageUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('code') }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('message') }})
    

@dataclass
class SendClientsMessageUsingPostRequest:
    query_params: SendClientsMessageUsingPostQueryParams = field()
    

@dataclass
class SendClientsMessageUsingPostResponse:
    content_type: str = field()
    status_code: int = field()
    send_clients_message_using_post_200_application_json_object: Optional[SendClientsMessageUsingPost200ApplicationJSON] = field(default=None)
    send_clients_message_using_post_400_application_json_object: Optional[SendClientsMessageUsingPost400ApplicationJSON] = field(default=None)
    send_clients_message_using_post_401_application_json_object: Optional[SendClientsMessageUsingPost401ApplicationJSON] = field(default=None)
    send_clients_message_using_post_500_application_json_object: Optional[SendClientsMessageUsingPost500ApplicationJSON] = field(default=None)
    
