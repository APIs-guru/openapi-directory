from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateProjectStatusForProjectPathParams:
    project_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'project_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateProjectStatusForProjectQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateProjectStatusForProjectRequestBody:
    data: Optional[shared.ProjectStatusRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class CreateProjectStatusForProjectRequest:
    path_params: CreateProjectStatusForProjectPathParams = field(default=None)
    query_params: CreateProjectStatusForProjectQueryParams = field(default=None)
    request: CreateProjectStatusForProjectRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateProjectStatusForProject201ApplicationJSON:
    data: Optional[shared.ProjectStatusResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class CreateProjectStatusForProjectResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    create_project_status_for_project_201_application_json_object: Optional[CreateProjectStatusForProject201ApplicationJSON] = field(default=None)
    
