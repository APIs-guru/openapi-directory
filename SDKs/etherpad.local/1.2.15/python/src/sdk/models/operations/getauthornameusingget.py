from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAuthorNameUsingGetQueryParams:
    author_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authorID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAuthorNameUsingGetRequest:
    query_params: GetAuthorNameUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAuthorNameUsingGet200ApplicationJSONDataInfo:
    color_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    

@dataclass_json
@dataclass
class GetAuthorNameUsingGet200ApplicationJSONData:
    info: Optional[GetAuthorNameUsingGet200ApplicationJSONDataInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    

@dataclass_json
@dataclass
class GetAuthorNameUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[GetAuthorNameUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAuthorNameUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAuthorNameUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAuthorNameUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetAuthorNameUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_author_name_using_get_200_application_json_object: Optional[GetAuthorNameUsingGet200ApplicationJSON] = field(default=None)
    get_author_name_using_get_400_application_json_object: Optional[GetAuthorNameUsingGet400ApplicationJSON] = field(default=None)
    get_author_name_using_get_401_application_json_object: Optional[GetAuthorNameUsingGet401ApplicationJSON] = field(default=None)
    get_author_name_using_get_500_application_json_object: Optional[GetAuthorNameUsingGet500ApplicationJSON] = field(default=None)
    
