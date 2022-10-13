from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetProjectStatusPathParams:
    project_status_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'project_status_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectStatusQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProjectStatusRequest:
    path_params: GetProjectStatusPathParams = field(default=None)
    query_params: GetProjectStatusQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetProjectStatus200ApplicationJSON:
    data: Optional[shared.ProjectStatusResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetProjectStatusResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_project_status_200_application_json_object: Optional[GetProjectStatus200ApplicationJSON] = field(default=None)
    
