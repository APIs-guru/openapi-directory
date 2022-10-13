from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class SendClientsMessageUsingPostQueryParams:
    msg: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'msg', 'style': 'form', 'explode': True }})
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class SendClientsMessageUsingPostRequest:
    query_params: SendClientsMessageUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SendClientsMessageUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SendClientsMessageUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SendClientsMessageUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SendClientsMessageUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class SendClientsMessageUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    send_clients_message_using_post_200_application_json_object: Optional[SendClientsMessageUsingPost200ApplicationJSON] = field(default=None)
    send_clients_message_using_post_400_application_json_object: Optional[SendClientsMessageUsingPost400ApplicationJSON] = field(default=None)
    send_clients_message_using_post_401_application_json_object: Optional[SendClientsMessageUsingPost401ApplicationJSON] = field(default=None)
    send_clients_message_using_post_500_application_json_object: Optional[SendClientsMessageUsingPost500ApplicationJSON] = field(default=None)
    
