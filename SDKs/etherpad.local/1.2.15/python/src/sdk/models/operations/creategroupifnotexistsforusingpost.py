from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateGroupIfNotExistsForUsingPostQueryParams:
    group_mapper: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupMapper', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateGroupIfNotExistsForUsingPostRequest:
    query_params: CreateGroupIfNotExistsForUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CreateGroupIfNotExistsForUsingPost200ApplicationJSONData:
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupID' }})
    

@dataclass_json
@dataclass
class CreateGroupIfNotExistsForUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[CreateGroupIfNotExistsForUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupIfNotExistsForUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupIfNotExistsForUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupIfNotExistsForUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CreateGroupIfNotExistsForUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_group_if_not_exists_for_using_post_200_application_json_object: Optional[CreateGroupIfNotExistsForUsingPost200ApplicationJSON] = field(default=None)
    create_group_if_not_exists_for_using_post_400_application_json_object: Optional[CreateGroupIfNotExistsForUsingPost400ApplicationJSON] = field(default=None)
    create_group_if_not_exists_for_using_post_401_application_json_object: Optional[CreateGroupIfNotExistsForUsingPost401ApplicationJSON] = field(default=None)
    create_group_if_not_exists_for_using_post_500_application_json_object: Optional[CreateGroupIfNotExistsForUsingPost500ApplicationJSON] = field(default=None)
    
