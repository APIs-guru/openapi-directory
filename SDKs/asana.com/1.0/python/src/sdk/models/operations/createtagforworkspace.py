from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateTagForWorkspacePathParams:
    workspace_gid: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateTagForWorkspaceQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class CreateTagForWorkspaceRequestBody:
    data: Optional[shared.TagResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class CreateTagForWorkspaceRequest:
    path_params: CreateTagForWorkspacePathParams = field(default=None)
    query_params: CreateTagForWorkspaceQueryParams = field(default=None)
    request: CreateTagForWorkspaceRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class CreateTagForWorkspace201ApplicationJSON:
    data: Optional[shared.TagResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class CreateTagForWorkspaceResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    create_tag_for_workspace_201_application_json_object: Optional[CreateTagForWorkspace201ApplicationJSON] = field(default=None)
    
