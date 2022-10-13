from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateGroupUsingGet200ApplicationJSONData:
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupID' }})
    

@dataclass_json
@dataclass
class CreateGroupUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[CreateGroupUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CreateGroupUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_group_using_get_200_application_json_object: Optional[CreateGroupUsingGet200ApplicationJSON] = field(default=None)
    create_group_using_get_400_application_json_object: Optional[CreateGroupUsingGet400ApplicationJSON] = field(default=None)
    create_group_using_get_401_application_json_object: Optional[CreateGroupUsingGet401ApplicationJSON] = field(default=None)
    create_group_using_get_500_application_json_object: Optional[CreateGroupUsingGet500ApplicationJSON] = field(default=None)
    
