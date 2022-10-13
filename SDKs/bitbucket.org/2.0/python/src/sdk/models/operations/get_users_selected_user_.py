from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUsersSelectedUserPathParams:
    selected_user: str = field(default=None, metadata={'path_param': { 'field_name': 'selected_user', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersSelectedUserSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersSelectedUserSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUsersSelectedUserSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUsersSelectedUserSecurity:
    option1: Optional[GetUsersSelectedUserSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUsersSelectedUserSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetUsersSelectedUserSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUsersSelectedUserRequest:
    path_params: GetUsersSelectedUserPathParams = field(default=None)
    security: GetUsersSelectedUserSecurity = field(default=None)
    

@dataclass
class GetUsersSelectedUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    user: Optional[dict[str, Any]] = field(default=None)
    
