from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json


@dataclass
class ListSavedRevisionsUsingPostQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class ListSavedRevisionsUsingPostRequest:
    query_params: ListSavedRevisionsUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ListSavedRevisionsUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListSavedRevisionsUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListSavedRevisionsUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class ListSavedRevisionsUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ListSavedRevisionsUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    list_saved_revisions_using_post_200_application_json_object: Optional[ListSavedRevisionsUsingPost200ApplicationJSON] = field(default=None)
    list_saved_revisions_using_post_400_application_json_object: Optional[ListSavedRevisionsUsingPost400ApplicationJSON] = field(default=None)
    list_saved_revisions_using_post_401_application_json_object: Optional[ListSavedRevisionsUsingPost401ApplicationJSON] = field(default=None)
    list_saved_revisions_using_post_500_application_json_object: Optional[ListSavedRevisionsUsingPost500ApplicationJSON] = field(default=None)
    
