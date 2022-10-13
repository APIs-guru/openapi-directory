from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class DeleteGroupUsingGetQueryParams:
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupID', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteGroupUsingGetRequest:
    query_params: DeleteGroupUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class DeleteGroupUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteGroupUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteGroupUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class DeleteGroupUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class DeleteGroupUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    delete_group_using_get_200_application_json_object: Optional[DeleteGroupUsingGet200ApplicationJSON] = field(default=None)
    delete_group_using_get_400_application_json_object: Optional[DeleteGroupUsingGet400ApplicationJSON] = field(default=None)
    delete_group_using_get_401_application_json_object: Optional[DeleteGroupUsingGet401ApplicationJSON] = field(default=None)
    delete_group_using_get_500_application_json_object: Optional[DeleteGroupUsingGet500ApplicationJSON] = field(default=None)
    
