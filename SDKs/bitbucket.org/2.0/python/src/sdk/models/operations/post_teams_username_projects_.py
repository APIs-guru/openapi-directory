from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PostTeamsUsernameProjectsPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostTeamsUsernameProjectsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostTeamsUsernameProjectsRequest:
    path_params: PostTeamsUsernameProjectsPathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostTeamsUsernameProjectsSecurity = field()
    

@dataclass
class PostTeamsUsernameProjectsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    project: Optional[dict[str, Any]] = field(default=None)
    
