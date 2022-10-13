from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ListSessionsOfGroupUsingPostQueryParams:
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupID', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSessionsOfGroupUsingPostRequest:
    query_params: ListSessionsOfGroupUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListSessionsOfGroupUsingPost200ApplicationJSONDataSessions:
    author_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorID' }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupID' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    valid_until: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validUntil' }})
    

@dataclass_json
@dataclass
class ListSessionsOfGroupUsingPost200ApplicationJSONData:
    sessions: Optional[List[ListSessionsOfGroupUsingPost200ApplicationJSONDataSessions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessions' }})
    

@dataclass_json
@dataclass
class ListSessionsOfGroupUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[ListSessionsOfGroupUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListSessionsOfGroupUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListSessionsOfGroupUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListSessionsOfGroupUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ListSessionsOfGroupUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_sessions_of_group_using_post_200_application_json_object: Optional[ListSessionsOfGroupUsingPost200ApplicationJSON] = field(default=None)
    list_sessions_of_group_using_post_400_application_json_object: Optional[ListSessionsOfGroupUsingPost400ApplicationJSON] = field(default=None)
    list_sessions_of_group_using_post_401_application_json_object: Optional[ListSessionsOfGroupUsingPost401ApplicationJSON] = field(default=None)
    list_sessions_of_group_using_post_500_application_json_object: Optional[ListSessionsOfGroupUsingPost500ApplicationJSON] = field(default=None)
    
