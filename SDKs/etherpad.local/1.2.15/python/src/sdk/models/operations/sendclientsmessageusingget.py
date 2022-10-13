from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class SendClientsMessageUsingGetQueryParams:
    msg: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'msg', 'style': 'form', 'explode': True }})
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class SendClientsMessageUsingGetRequest:
    query_params: SendClientsMessageUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SendClientsMessageUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SendClientsMessageUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SendClientsMessageUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SendClientsMessageUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class SendClientsMessageUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    send_clients_message_using_get_200_application_json_object: Optional[SendClientsMessageUsingGet200ApplicationJSON] = field(default=None)
    send_clients_message_using_get_400_application_json_object: Optional[SendClientsMessageUsingGet400ApplicationJSON] = field(default=None)
    send_clients_message_using_get_401_application_json_object: Optional[SendClientsMessageUsingGet401ApplicationJSON] = field(default=None)
    send_clients_message_using_get_500_application_json_object: Optional[SendClientsMessageUsingGet500ApplicationJSON] = field(default=None)
    
