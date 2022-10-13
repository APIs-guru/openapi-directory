from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ListSavedRevisionsUsingGetQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSavedRevisionsUsingGetRequest:
    query_params: ListSavedRevisionsUsingGetQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListSavedRevisionsUsingGet200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListSavedRevisionsUsingGet400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListSavedRevisionsUsingGet401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListSavedRevisionsUsingGet500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ListSavedRevisionsUsingGetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_saved_revisions_using_get_200_application_json_object: Optional[ListSavedRevisionsUsingGet200ApplicationJSON] = field(default=None)
    list_saved_revisions_using_get_400_application_json_object: Optional[ListSavedRevisionsUsingGet400ApplicationJSON] = field(default=None)
    list_saved_revisions_using_get_401_application_json_object: Optional[ListSavedRevisionsUsingGet401ApplicationJSON] = field(default=None)
    list_saved_revisions_using_get_500_application_json_object: Optional[ListSavedRevisionsUsingGet500ApplicationJSON] = field(default=None)
    
