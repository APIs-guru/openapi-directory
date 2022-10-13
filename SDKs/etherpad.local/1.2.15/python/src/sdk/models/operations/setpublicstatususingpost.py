from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class SetPublicStatusUsingPostQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    public_status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'publicStatus', 'style': 'form', 'explode': True }})
    

@dataclass
class SetPublicStatusUsingPostRequest:
    query_params: SetPublicStatusUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SetPublicStatusUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SetPublicStatusUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SetPublicStatusUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SetPublicStatusUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class SetPublicStatusUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_public_status_using_post_200_application_json_object: Optional[SetPublicStatusUsingPost200ApplicationJSON] = field(default=None)
    set_public_status_using_post_400_application_json_object: Optional[SetPublicStatusUsingPost400ApplicationJSON] = field(default=None)
    set_public_status_using_post_401_application_json_object: Optional[SetPublicStatusUsingPost401ApplicationJSON] = field(default=None)
    set_public_status_using_post_500_application_json_object: Optional[SetPublicStatusUsingPost500ApplicationJSON] = field(default=None)
    
