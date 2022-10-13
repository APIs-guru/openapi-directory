from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateGroupUsingPost200ApplicationJSONData:
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupID' }})
    

@dataclass_json
@dataclass
class CreateGroupUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[CreateGroupUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CreateGroupUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_group_using_post_200_application_json_object: Optional[CreateGroupUsingPost200ApplicationJSON] = field(default=None)
    create_group_using_post_400_application_json_object: Optional[CreateGroupUsingPost400ApplicationJSON] = field(default=None)
    create_group_using_post_401_application_json_object: Optional[CreateGroupUsingPost401ApplicationJSON] = field(default=None)
    create_group_using_post_500_application_json_object: Optional[CreateGroupUsingPost500ApplicationJSON] = field(default=None)
    
