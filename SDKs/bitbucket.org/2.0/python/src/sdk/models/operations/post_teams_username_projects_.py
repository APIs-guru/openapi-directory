from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostTeamsUsernameProjectsPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTeamsUsernameProjectsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostTeamsUsernameProjectsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostTeamsUsernameProjectsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostTeamsUsernameProjectsSecurity:
    option1: Optional[PostTeamsUsernameProjectsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostTeamsUsernameProjectsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostTeamsUsernameProjectsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostTeamsUsernameProjectsRequest:
    path_params: PostTeamsUsernameProjectsPathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostTeamsUsernameProjectsSecurity = field(default=None)
    

@dataclass
class PostTeamsUsernameProjectsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    project: Optional[dict[str, Any]] = field(default=None)
    
