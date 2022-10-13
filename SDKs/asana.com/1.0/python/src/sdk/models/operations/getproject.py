from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetProjectPathParams:
    project_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProjectRequest:
    path_params: GetProjectPathParams = field(default=None)
    query_params: GetProjectQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetProject200ApplicationJSON:
    data: Optional[shared.ProjectResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetProjectResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_project_200_application_json_object: Optional[GetProject200ApplicationJSON] = field(default=None)
    
