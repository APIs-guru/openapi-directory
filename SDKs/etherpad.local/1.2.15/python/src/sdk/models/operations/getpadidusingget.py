from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetPadIDUsingGetQueryParams:
    ro_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'roID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPadIDUsingGetRequest:
    query_params: GetPadIDUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetPadIDUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetPadIDUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetPadIDUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetPadIDUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetPadIDUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_pad_id_using_get_200_application_json_object: Optional[GetPadIDUsingGet200ApplicationJSON] = field(default=None)
    get_pad_id_using_get_400_application_json_object: Optional[GetPadIDUsingGet400ApplicationJSON] = field(default=None)
    get_pad_id_using_get_401_application_json_object: Optional[GetPadIDUsingGet401ApplicationJSON] = field(default=None)
    get_pad_id_using_get_500_application_json_object: Optional[GetPadIDUsingGet500ApplicationJSON] = field(default=None)
    
