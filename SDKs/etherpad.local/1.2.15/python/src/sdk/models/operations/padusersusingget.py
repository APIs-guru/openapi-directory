from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class PadUsersUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class PadUsersUsingGetRequest:
    query_params: PadUsersUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class PadUsersUsingGet200ApplicationJSONDataPadUsers:
    color_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    

@dataclass_json
@dataclass
class PadUsersUsingGet200ApplicationJSONData:
    pad_users: Optional[List[PadUsersUsingGet200ApplicationJSONDataPadUsers]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'padUsers' }})
    

@dataclass_json
@dataclass
class PadUsersUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[PadUsersUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PadUsersUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PadUsersUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PadUsersUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PadUsersUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    pad_users_using_get_200_application_json_object: Optional[PadUsersUsingGet200ApplicationJSON] = field(default=None)
    pad_users_using_get_400_application_json_object: Optional[PadUsersUsingGet400ApplicationJSON] = field(default=None)
    pad_users_using_get_401_application_json_object: Optional[PadUsersUsingGet401ApplicationJSON] = field(default=None)
    pad_users_using_get_500_application_json_object: Optional[PadUsersUsingGet500ApplicationJSON] = field(default=None)
    
