from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTeamsWorkspaceRepositoriesPathParams:
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsWorkspaceRepositoriesSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTeamsWorkspaceRepositoriesSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetTeamsWorkspaceRepositoriesSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsWorkspaceRepositoriesSecurity:
    option1: Optional[GetTeamsWorkspaceRepositoriesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTeamsWorkspaceRepositoriesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetTeamsWorkspaceRepositoriesSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTeamsWorkspaceRepositoriesRequest:
    path_params: GetTeamsWorkspaceRepositoriesPathParams = field(default=None)
    security: GetTeamsWorkspaceRepositoriesSecurity = field(default=None)
    

@dataclass
class GetTeamsWorkspaceRepositoriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
