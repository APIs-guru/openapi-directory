from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PutTeamsUsernameProjectsProjectKeyPathParams:
    project_key: str = field(metadata={'path_param': { 'field_name': 'project_key', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTeamsUsernameProjectsProjectKeySecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutTeamsUsernameProjectsProjectKeyRequest:
    path_params: PutTeamsUsernameProjectsProjectKeyPathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PutTeamsUsernameProjectsProjectKeySecurity = field()
    

@dataclass
class PutTeamsUsernameProjectsProjectKeyResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    project: Optional[dict[str, Any]] = field(default=None)
    
