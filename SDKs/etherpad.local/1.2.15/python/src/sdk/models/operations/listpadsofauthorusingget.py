from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ListPadsOfAuthorUsingGetQueryParams:
    author_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authorID', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPadsOfAuthorUsingGetRequest:
    query_params: ListPadsOfAuthorUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListPadsOfAuthorUsingGet200ApplicationJSONData:
    pad_i_ds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'padIDs' }})
    

@dataclass_json
@dataclass
class ListPadsOfAuthorUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[ListPadsOfAuthorUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListPadsOfAuthorUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListPadsOfAuthorUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListPadsOfAuthorUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ListPadsOfAuthorUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_pads_of_author_using_get_200_application_json_object: Optional[ListPadsOfAuthorUsingGet200ApplicationJSON] = field(default=None)
    list_pads_of_author_using_get_400_application_json_object: Optional[ListPadsOfAuthorUsingGet400ApplicationJSON] = field(default=None)
    list_pads_of_author_using_get_401_application_json_object: Optional[ListPadsOfAuthorUsingGet401ApplicationJSON] = field(default=None)
    list_pads_of_author_using_get_500_application_json_object: Optional[ListPadsOfAuthorUsingGet500ApplicationJSON] = field(default=None)
    
