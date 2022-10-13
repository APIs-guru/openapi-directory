from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class PadUsersCountUsingPostQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class PadUsersCountUsingPostRequest:
    query_params: PadUsersCountUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class PadUsersCountUsingPost200ApplicationJSONData:
    pad_users_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'padUsersCount' }})
    

@dataclass_json
@dataclass
class PadUsersCountUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[PadUsersCountUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PadUsersCountUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PadUsersCountUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class PadUsersCountUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class PadUsersCountUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    pad_users_count_using_post_200_application_json_object: Optional[PadUsersCountUsingPost200ApplicationJSON] = field(default=None)
    pad_users_count_using_post_400_application_json_object: Optional[PadUsersCountUsingPost400ApplicationJSON] = field(default=None)
    pad_users_count_using_post_401_application_json_object: Optional[PadUsersCountUsingPost401ApplicationJSON] = field(default=None)
    pad_users_count_using_post_500_application_json_object: Optional[PadUsersCountUsingPost500ApplicationJSON] = field(default=None)
    
