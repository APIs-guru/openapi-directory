from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateGroupIfNotExistsForUsingGetQueryParams:
    group_mapper: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupMapper', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateGroupIfNotExistsForUsingGetRequest:
    query_params: CreateGroupIfNotExistsForUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CreateGroupIfNotExistsForUsingGet200ApplicationJSONData:
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupID' }})
    

@dataclass_json
@dataclass
class CreateGroupIfNotExistsForUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[CreateGroupIfNotExistsForUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupIfNotExistsForUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupIfNotExistsForUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupIfNotExistsForUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CreateGroupIfNotExistsForUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_group_if_not_exists_for_using_get_200_application_json_object: Optional[CreateGroupIfNotExistsForUsingGet200ApplicationJSON] = field(default=None)
    create_group_if_not_exists_for_using_get_400_application_json_object: Optional[CreateGroupIfNotExistsForUsingGet400ApplicationJSON] = field(default=None)
    create_group_if_not_exists_for_using_get_401_application_json_object: Optional[CreateGroupIfNotExistsForUsingGet401ApplicationJSON] = field(default=None)
    create_group_if_not_exists_for_using_get_500_application_json_object: Optional[CreateGroupIfNotExistsForUsingGet500ApplicationJSON] = field(default=None)
    
