from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class CreateProjectForWorkspacePathParams:
    workspace_gid: str = field(metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateProjectForWorkspaceQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateProjectForWorkspaceRequestBodyInput:
    data: Optional[shared.ProjectRequestInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass_json
@dataclass
class CreateProjectForWorkspace201ApplicationJSON:
    data: Optional[shared.ProjectResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class CreateProjectForWorkspaceRequest:
    path_params: CreateProjectForWorkspacePathParams = field()
    query_params: CreateProjectForWorkspaceQueryParams = field()
    request: CreateProjectForWorkspaceRequestBodyInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateProjectForWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    create_project_for_workspace_201_application_json_object: Optional[CreateProjectForWorkspace201ApplicationJSON] = field(default=None)
    
