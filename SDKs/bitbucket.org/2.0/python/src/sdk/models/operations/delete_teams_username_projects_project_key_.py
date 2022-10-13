from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteTeamsUsernameProjectsProjectKeyPathParams:
    project_key: str = field(default=None, metadata={'path_param': { 'field_name': 'project_key', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTeamsUsernameProjectsProjectKeySecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class DeleteTeamsUsernameProjectsProjectKeySecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTeamsUsernameProjectsProjectKeySecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteTeamsUsernameProjectsProjectKeySecurity:
    option1: Optional[DeleteTeamsUsernameProjectsProjectKeySecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[DeleteTeamsUsernameProjectsProjectKeySecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[DeleteTeamsUsernameProjectsProjectKeySecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class DeleteTeamsUsernameProjectsProjectKeyRequest:
    path_params: DeleteTeamsUsernameProjectsProjectKeyPathParams = field(default=None)
    security: DeleteTeamsUsernameProjectsProjectKeySecurity = field(default=None)
    

@dataclass
class DeleteTeamsUsernameProjectsProjectKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
