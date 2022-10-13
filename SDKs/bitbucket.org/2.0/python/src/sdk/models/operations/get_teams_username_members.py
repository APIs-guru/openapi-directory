from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTeamsUsernameMembersPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTeamsUsernameMembersSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTeamsUsernameMembersSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetTeamsUsernameMembersSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTeamsUsernameMembersSecurity:
    option1: Optional[GetTeamsUsernameMembersSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetTeamsUsernameMembersSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetTeamsUsernameMembersSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetTeamsUsernameMembersRequest:
    path_params: GetTeamsUsernameMembersPathParams = field(default=None)
    security: GetTeamsUsernameMembersSecurity = field(default=None)
    

@dataclass
class GetTeamsUsernameMembersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    user: Optional[dict[str, Any]] = field(default=None)
    
