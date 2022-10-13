from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUsersWorkspaceRepositoriesPathParams:
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersWorkspaceRepositoriesSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersWorkspaceRepositoriesSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUsersWorkspaceRepositoriesSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUsersWorkspaceRepositoriesSecurity:
    option1: Optional[GetUsersWorkspaceRepositoriesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUsersWorkspaceRepositoriesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetUsersWorkspaceRepositoriesSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUsersWorkspaceRepositoriesRequest:
    path_params: GetUsersWorkspaceRepositoriesPathParams = field(default=None)
    security: GetUsersWorkspaceRepositoriesSecurity = field(default=None)
    

@dataclass
class GetUsersWorkspaceRepositoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
