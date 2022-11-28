from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetTeamsUsernameProjectsProjectKeyPathParams:
    project_key: str = field(metadata={'path_param': { 'field_name': 'project_key', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsUsernameProjectsProjectKeySecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTeamsUsernameProjectsProjectKeyRequest:
    path_params: GetTeamsUsernameProjectsProjectKeyPathParams = field()
    security: GetTeamsUsernameProjectsProjectKeySecurity = field()
    

@dataclass
class GetTeamsUsernameProjectsProjectKeyResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    project: Optional[dict[str, Any]] = field(default=None)
    
