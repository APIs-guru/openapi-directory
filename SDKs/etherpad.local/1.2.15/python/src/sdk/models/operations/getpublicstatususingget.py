from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetPublicStatusUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPublicStatusUsingGetRequest:
    query_params: GetPublicStatusUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetPublicStatusUsingGet200ApplicationJSONData:
    public_status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicStatus' }})
    

@dataclass_json
@dataclass
class GetPublicStatusUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[GetPublicStatusUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetPublicStatusUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetPublicStatusUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetPublicStatusUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetPublicStatusUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_public_status_using_get_200_application_json_object: Optional[GetPublicStatusUsingGet200ApplicationJSON] = field(default=None)
    get_public_status_using_get_400_application_json_object: Optional[GetPublicStatusUsingGet400ApplicationJSON] = field(default=None)
    get_public_status_using_get_401_application_json_object: Optional[GetPublicStatusUsingGet401ApplicationJSON] = field(default=None)
    get_public_status_using_get_500_application_json_object: Optional[GetPublicStatusUsingGet500ApplicationJSON] = field(default=None)
    
