from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTeamsUsernameProjectsProjectKeyPathParams:
    project_key: str = field(default=None, metadata={'path_param': { 'field_name': 'project_key', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsUsernameProjectsProjectKeySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTeamsUsernameProjectsProjectKeySecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetTeamsUsernameProjectsProjectKeySecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsUsernameProjectsProjectKeySecurity:
    option1: Optional[GetTeamsUsernameProjectsProjectKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTeamsUsernameProjectsProjectKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetTeamsUsernameProjectsProjectKeySecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTeamsUsernameProjectsProjectKeyRequest:
    path_params: GetTeamsUsernameProjectsProjectKeyPathParams = field(default=None)
    security: GetTeamsUsernameProjectsProjectKeySecurity = field(default=None)
    

@dataclass
class GetTeamsUsernameProjectsProjectKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    project: Optional[dict[str, Any]] = field(default=None)
    
