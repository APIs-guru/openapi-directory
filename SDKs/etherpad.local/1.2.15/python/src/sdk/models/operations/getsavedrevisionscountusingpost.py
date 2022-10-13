from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class GetSavedRevisionsCountUsingPostQueryParams:
    pad_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'padID', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSavedRevisionsCountUsingPostRequest:
    query_params: GetSavedRevisionsCountUsingPostQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetSavedRevisionsCountUsingPost200ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedRevisionsCountUsingPost400ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedRevisionsCountUsingPost401ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass_json
@dataclass
class GetSavedRevisionsCountUsingPost500ApplicationJSON:
    code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class GetSavedRevisionsCountUsingPostResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_saved_revisions_count_using_post_200_application_json_object: Optional[GetSavedRevisionsCountUsingPost200ApplicationJSON] = field(default=None)
    get_saved_revisions_count_using_post_400_application_json_object: Optional[GetSavedRevisionsCountUsingPost400ApplicationJSON] = field(default=None)
    get_saved_revisions_count_using_post_401_application_json_object: Optional[GetSavedRevisionsCountUsingPost401ApplicationJSON] = field(default=None)
    get_saved_revisions_count_using_post_500_application_json_object: Optional[GetSavedRevisionsCountUsingPost500ApplicationJSON] = field(default=None)
    
