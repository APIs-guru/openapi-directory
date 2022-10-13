from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAuthorNameUsingPostQueryParams:
    author_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authorID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAuthorNameUsingPostRequest:
    query_params: GetAuthorNameUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAuthorNameUsingPost200ApplicationJSONDataInfo:
    color_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorId' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp' }})
    

@dataclass_json
@dataclass
class GetAuthorNameUsingPost200ApplicationJSONData:
    info: Optional[GetAuthorNameUsingPost200ApplicationJSONDataInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    

@dataclass_json
@dataclass
class GetAuthorNameUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[GetAuthorNameUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAuthorNameUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAuthorNameUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAuthorNameUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetAuthorNameUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_author_name_using_post_200_application_json_object: Optional[GetAuthorNameUsingPost200ApplicationJSON] = field(default=None)
    get_author_name_using_post_400_application_json_object: Optional[GetAuthorNameUsingPost400ApplicationJSON] = field(default=None)
    get_author_name_using_post_401_application_json_object: Optional[GetAuthorNameUsingPost401ApplicationJSON] = field(default=None)
    get_author_name_using_post_500_application_json_object: Optional[GetAuthorNameUsingPost500ApplicationJSON] = field(default=None)
    
