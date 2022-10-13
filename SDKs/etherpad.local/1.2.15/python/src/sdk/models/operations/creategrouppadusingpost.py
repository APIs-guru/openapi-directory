from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class CreateGroupPadUsingPostQueryParams:
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupID', 'style': 'form', 'explode': True }})
    pad_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padName', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateGroupPadUsingPostRequest:
    query_params: CreateGroupPadUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class CreateGroupPadUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupPadUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupPadUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class CreateGroupPadUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class CreateGroupPadUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    create_group_pad_using_post_200_application_json_object: Optional[CreateGroupPadUsingPost200ApplicationJSON] = field(default=None)
    create_group_pad_using_post_400_application_json_object: Optional[CreateGroupPadUsingPost400ApplicationJSON] = field(default=None)
    create_group_pad_using_post_401_application_json_object: Optional[CreateGroupPadUsingPost401ApplicationJSON] = field(default=None)
    create_group_pad_using_post_500_application_json_object: Optional[CreateGroupPadUsingPost500ApplicationJSON] = field(default=None)
    
