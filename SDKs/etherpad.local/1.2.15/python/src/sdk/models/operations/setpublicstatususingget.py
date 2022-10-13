from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class SetPublicStatusUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    public_status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'publicStatus', 'style': 'form', 'explode': True }})
    

@dataclass
class SetPublicStatusUsingGetRequest:
    query_params: SetPublicStatusUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class SetPublicStatusUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SetPublicStatusUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SetPublicStatusUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class SetPublicStatusUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class SetPublicStatusUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_public_status_using_get_200_application_json_object: Optional[SetPublicStatusUsingGet200ApplicationJSON] = field(default=None)
    set_public_status_using_get_400_application_json_object: Optional[SetPublicStatusUsingGet400ApplicationJSON] = field(default=None)
    set_public_status_using_get_401_application_json_object: Optional[SetPublicStatusUsingGet401ApplicationJSON] = field(default=None)
    set_public_status_using_get_500_application_json_object: Optional[SetPublicStatusUsingGet500ApplicationJSON] = field(default=None)
    
