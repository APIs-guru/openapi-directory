from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetReadOnlyIDUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetReadOnlyIDUsingGetRequest:
    query_params: GetReadOnlyIDUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetReadOnlyIDUsingGet200ApplicationJSONData:
    read_only_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'readOnlyID' }})
    

@dataclass_json
@dataclass
class GetReadOnlyIDUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[GetReadOnlyIDUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetReadOnlyIDUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetReadOnlyIDUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetReadOnlyIDUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetReadOnlyIDUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_read_only_id_using_get_200_application_json_object: Optional[GetReadOnlyIDUsingGet200ApplicationJSON] = field(default=None)
    get_read_only_id_using_get_400_application_json_object: Optional[GetReadOnlyIDUsingGet400ApplicationJSON] = field(default=None)
    get_read_only_id_using_get_401_application_json_object: Optional[GetReadOnlyIDUsingGet401ApplicationJSON] = field(default=None)
    get_read_only_id_using_get_500_application_json_object: Optional[GetReadOnlyIDUsingGet500ApplicationJSON] = field(default=None)
    
