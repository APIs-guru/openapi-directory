from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetProjectStatusPathParams:
    project_status_gid: str = field(metadata={'path_param': { 'field_name': 'project_status_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectStatusQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetProjectStatus200ApplicationJSON:
    data: Optional[shared.ProjectStatusResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetProjectStatusRequest:
    path_params: GetProjectStatusPathParams = field()
    query_params: GetProjectStatusQueryParams = field()
    

@dataclass
class GetProjectStatusResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    get_project_status_200_application_json_object: Optional[GetProjectStatus200ApplicationJSON] = field(default=None)
    
