from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetAttributePoolUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAttributePoolUsingGetRequest:
    query_params: GetAttributePoolUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAttributePoolUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAttributePoolUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAttributePoolUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetAttributePoolUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetAttributePoolUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_attribute_pool_using_get_200_application_json_object: Optional[GetAttributePoolUsingGet200ApplicationJSON] = field(default=None)
    get_attribute_pool_using_get_400_application_json_object: Optional[GetAttributePoolUsingGet400ApplicationJSON] = field(default=None)
    get_attribute_pool_using_get_401_application_json_object: Optional[GetAttributePoolUsingGet401ApplicationJSON] = field(default=None)
    get_attribute_pool_using_get_500_application_json_object: Optional[GetAttributePoolUsingGet500ApplicationJSON] = field(default=None)
    
