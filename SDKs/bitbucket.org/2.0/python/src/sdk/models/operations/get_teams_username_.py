from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTeamsUsernamePathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsUsernameSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTeamsUsernameSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetTeamsUsernameSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsUsernameSecurity:
    option1: Optional[GetTeamsUsernameSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTeamsUsernameSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetTeamsUsernameSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTeamsUsernameRequest:
    path_params: GetTeamsUsernamePathParams = field(default=None)
    security: GetTeamsUsernameSecurity = field(default=None)
    

@dataclass
class GetTeamsUsernameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    team: Optional[dict[str, Any]] = field(default=None)
    
