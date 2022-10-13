from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetSessionInfoUsingPostQueryParams:
    session_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sessionID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSessionInfoUsingPostRequest:
    query_params: GetSessionInfoUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetSessionInfoUsingPost200ApplicationJSONDataInfo:
    author_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorID' }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupID' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    valid_until: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validUntil' }})
    

@dataclass_json
@dataclass
class GetSessionInfoUsingPost200ApplicationJSONData:
    info: Optional[GetSessionInfoUsingPost200ApplicationJSONDataInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'info' }})
    

@dataclass_json
@dataclass
class GetSessionInfoUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[GetSessionInfoUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSessionInfoUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSessionInfoUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSessionInfoUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetSessionInfoUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_session_info_using_post_200_application_json_object: Optional[GetSessionInfoUsingPost200ApplicationJSON] = field(default=None)
    get_session_info_using_post_400_application_json_object: Optional[GetSessionInfoUsingPost400ApplicationJSON] = field(default=None)
    get_session_info_using_post_401_application_json_object: Optional[GetSessionInfoUsingPost401ApplicationJSON] = field(default=None)
    get_session_info_using_post_500_application_json_object: Optional[GetSessionInfoUsingPost500ApplicationJSON] = field(default=None)
    
