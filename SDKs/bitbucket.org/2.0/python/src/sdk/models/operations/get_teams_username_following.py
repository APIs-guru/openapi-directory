from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetTeamsUsernameFollowingPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsUsernameFollowingSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTeamsUsernameFollowingSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetTeamsUsernameFollowingSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsUsernameFollowingSecurity:
    option1: Optional[GetTeamsUsernameFollowingSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTeamsUsernameFollowingSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetTeamsUsernameFollowingSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTeamsUsernameFollowingRequest:
    path_params: GetTeamsUsernameFollowingPathParams = field(default=None)
    security: GetTeamsUsernameFollowingSecurity = field(default=None)
    

@dataclass
class GetTeamsUsernameFollowingResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_users: Optional[shared.PaginatedUsers] = field(default=None)
    
