from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetWorkspacesWorkspaceMembersMemberPathParams:
    member: str = field(default=None, metadata={'path_param': { 'field_name': 'member', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspacesWorkspaceMembersMemberSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWorkspacesWorkspaceMembersMemberSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetWorkspacesWorkspaceMembersMemberSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspacesWorkspaceMembersMemberSecurity:
    option1: Optional[GetWorkspacesWorkspaceMembersMemberSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetWorkspacesWorkspaceMembersMemberSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetWorkspacesWorkspaceMembersMemberSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetWorkspacesWorkspaceMembersMemberRequest:
    path_params: GetWorkspacesWorkspaceMembersMemberPathParams = field(default=None)
    security: GetWorkspacesWorkspaceMembersMemberSecurity = field(default=None)
    

@dataclass
class GetWorkspacesWorkspaceMembersMemberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    workspace_membership: Optional[dict[str, Any]] = field(default=None)
    
