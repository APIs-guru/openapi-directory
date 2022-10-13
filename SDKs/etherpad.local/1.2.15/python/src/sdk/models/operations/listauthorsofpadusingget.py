from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ListAuthorsOfPadUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class ListAuthorsOfPadUsingGetRequest:
    query_params: ListAuthorsOfPadUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListAuthorsOfPadUsingGet200ApplicationJSONData:
    author_i_ds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorIDs' }})
    

@dataclass_json
@dataclass
class ListAuthorsOfPadUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[ListAuthorsOfPadUsingGet200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListAuthorsOfPadUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListAuthorsOfPadUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListAuthorsOfPadUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ListAuthorsOfPadUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_authors_of_pad_using_get_200_application_json_object: Optional[ListAuthorsOfPadUsingGet200ApplicationJSON] = field(default=None)
    list_authors_of_pad_using_get_400_application_json_object: Optional[ListAuthorsOfPadUsingGet400ApplicationJSON] = field(default=None)
    list_authors_of_pad_using_get_401_application_json_object: Optional[ListAuthorsOfPadUsingGet401ApplicationJSON] = field(default=None)
    list_authors_of_pad_using_get_500_application_json_object: Optional[ListAuthorsOfPadUsingGet500ApplicationJSON] = field(default=None)
    
