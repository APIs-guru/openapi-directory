from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ListSessionsOfAuthorUsingPostQueryParams:
    author_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authorID', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSessionsOfAuthorUsingPostRequest:
    query_params: ListSessionsOfAuthorUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListSessionsOfAuthorUsingPost200ApplicationJSONDataSessions:
    author_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorID' }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupID' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    valid_until: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'validUntil' }})
    

@dataclass_json
@dataclass
class ListSessionsOfAuthorUsingPost200ApplicationJSONData:
    sessions: Optional[List[ListSessionsOfAuthorUsingPost200ApplicationJSONDataSessions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessions' }})
    

@dataclass_json
@dataclass
class ListSessionsOfAuthorUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[ListSessionsOfAuthorUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListSessionsOfAuthorUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListSessionsOfAuthorUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListSessionsOfAuthorUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ListSessionsOfAuthorUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_sessions_of_author_using_post_200_application_json_object: Optional[ListSessionsOfAuthorUsingPost200ApplicationJSON] = field(default=None)
    list_sessions_of_author_using_post_400_application_json_object: Optional[ListSessionsOfAuthorUsingPost400ApplicationJSON] = field(default=None)
    list_sessions_of_author_using_post_401_application_json_object: Optional[ListSessionsOfAuthorUsingPost401ApplicationJSON] = field(default=None)
    list_sessions_of_author_using_post_500_application_json_object: Optional[ListSessionsOfAuthorUsingPost500ApplicationJSON] = field(default=None)
    
