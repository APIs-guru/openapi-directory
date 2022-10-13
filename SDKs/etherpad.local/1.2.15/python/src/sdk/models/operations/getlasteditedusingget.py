from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetLastEditedUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLastEditedUsingGetRequest:
    query_params: GetLastEditedUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLastEditedUsingGet200ApplicationJSONData:
    last_edited: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastEdited' }})
    

@dataclass_json
@dataclass
class GetLastEditedUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[GetLastEditedUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetLastEditedUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetLastEditedUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetLastEditedUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetLastEditedUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_last_edited_using_get_200_application_json_object: Optional[GetLastEditedUsingGet200ApplicationJSON] = field(default=None)
    get_last_edited_using_get_400_application_json_object: Optional[GetLastEditedUsingGet400ApplicationJSON] = field(default=None)
    get_last_edited_using_get_401_application_json_object: Optional[GetLastEditedUsingGet401ApplicationJSON] = field(default=None)
    get_last_edited_using_get_500_application_json_object: Optional[GetLastEditedUsingGet500ApplicationJSON] = field(default=None)
    
