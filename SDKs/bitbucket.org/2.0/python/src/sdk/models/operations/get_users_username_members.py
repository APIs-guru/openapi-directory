from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUsersUsernameMembersPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUsernameMembersSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersUsernameMembersSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUsersUsernameMembersSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUsersUsernameMembersSecurity:
    option1: Optional[GetUsersUsernameMembersSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUsersUsernameMembersSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetUsersUsernameMembersSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUsersUsernameMembersRequest:
    path_params: GetUsersUsernameMembersPathParams = field(default=None)
    security: GetUsersUsernameMembersSecurity = field(default=None)
    

@dataclass
class GetUsersUsernameMembersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    user: Optional[dict[str, Any]] = field(default=None)
    
