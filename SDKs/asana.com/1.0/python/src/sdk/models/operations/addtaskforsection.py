from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class AddTaskForSectionPathParams:
    section_gid: str = field(metadata={'path_param': { 'field_name': 'section_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddTaskForSectionQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class AddTaskForSectionRequestBody:
    data: Optional[shared.SectionTaskInsertRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class AddTaskForSection200ApplicationJSON:
    data: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class AddTaskForSectionRequest:
    path_params: AddTaskForSectionPathParams = field()
    query_params: AddTaskForSectionQueryParams = field()
    request: AddTaskForSectionRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AddTaskForSectionResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    add_task_for_section_200_application_json_object: Optional[AddTaskForSection200ApplicationJSON] = field(default=None)
    
