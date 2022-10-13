from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateProjectForWorkspacePathParams:
    workspace_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateProjectForWorkspaceQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateProjectForWorkspaceRequestBody:
    data: Optional[shared.ProjectRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class CreateProjectForWorkspaceRequest:
    path_params: CreateProjectForWorkspacePathParams = field(default=None)
    query_params: CreateProjectForWorkspaceQueryParams = field(default=None)
    request: CreateProjectForWorkspaceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateProjectForWorkspace201ApplicationJSON:
    data: Optional[shared.ProjectResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class CreateProjectForWorkspaceResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    create_project_for_workspace_201_application_json_object: Optional[CreateProjectForWorkspace201ApplicationJSON] = field(default=None)
    
