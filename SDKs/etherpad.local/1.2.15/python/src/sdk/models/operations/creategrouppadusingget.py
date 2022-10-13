from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateGroupPadUsingGetQueryParams:
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupID', 'style': 'form', 'explode': True }})
    pad_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padName', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateGroupPadUsingGetRequest:
    query_params: CreateGroupPadUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CreateGroupPadUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupPadUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupPadUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupPadUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CreateGroupPadUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_group_pad_using_get_200_application_json_object: Optional[CreateGroupPadUsingGet200ApplicationJSON] = field(default=None)
    create_group_pad_using_get_400_application_json_object: Optional[CreateGroupPadUsingGet400ApplicationJSON] = field(default=None)
    create_group_pad_using_get_401_application_json_object: Optional[CreateGroupPadUsingGet401ApplicationJSON] = field(default=None)
    create_group_pad_using_get_500_application_json_object: Optional[CreateGroupPadUsingGet500ApplicationJSON] = field(default=None)
    
