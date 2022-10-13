from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateSessionUsingPostQueryParams:
    author_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authorID', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupID', 'style': 'form', 'explode': True }})
    valid_until: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'validUntil', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateSessionUsingPostRequest:
    query_params: CreateSessionUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CreateSessionUsingPost200ApplicationJSONData:
    session_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sessionID' }})
    

@dataclass_json
@dataclass
class CreateSessionUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[CreateSessionUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateSessionUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateSessionUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateSessionUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CreateSessionUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_session_using_post_200_application_json_object: Optional[CreateSessionUsingPost200ApplicationJSON] = field(default=None)
    create_session_using_post_400_application_json_object: Optional[CreateSessionUsingPost400ApplicationJSON] = field(default=None)
    create_session_using_post_401_application_json_object: Optional[CreateSessionUsingPost401ApplicationJSON] = field(default=None)
    create_session_using_post_500_application_json_object: Optional[CreateSessionUsingPost500ApplicationJSON] = field(default=None)
    
