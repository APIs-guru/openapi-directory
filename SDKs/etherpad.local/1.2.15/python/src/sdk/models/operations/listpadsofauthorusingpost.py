from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ListPadsOfAuthorUsingPostQueryParams:
    author_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'authorID', 'style': 'form', 'explode': True }})
    

@dataclass
class ListPadsOfAuthorUsingPostRequest:
    query_params: ListPadsOfAuthorUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListPadsOfAuthorUsingPost200ApplicationJSONData:
    pad_i_ds: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'padIDs' }})
    

@dataclass_json
@dataclass
class ListPadsOfAuthorUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[ListPadsOfAuthorUsingPost200ApplicationJSONData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListPadsOfAuthorUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListPadsOfAuthorUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListPadsOfAuthorUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ListPadsOfAuthorUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_pads_of_author_using_post_200_application_json_object: Optional[ListPadsOfAuthorUsingPost200ApplicationJSON] = field(default=None)
    list_pads_of_author_using_post_400_application_json_object: Optional[ListPadsOfAuthorUsingPost400ApplicationJSON] = field(default=None)
    list_pads_of_author_using_post_401_application_json_object: Optional[ListPadsOfAuthorUsingPost401ApplicationJSON] = field(default=None)
    list_pads_of_author_using_post_500_application_json_object: Optional[ListPadsOfAuthorUsingPost500ApplicationJSON] = field(default=None)
    
