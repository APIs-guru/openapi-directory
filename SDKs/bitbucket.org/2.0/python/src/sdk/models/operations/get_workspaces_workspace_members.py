from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetWorkspacesWorkspaceMembersPathParams:
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspacesWorkspaceMembersSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetWorkspacesWorkspaceMembersSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetWorkspacesWorkspaceMembersSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspacesWorkspaceMembersSecurity:
    option1: Optional[GetWorkspacesWorkspaceMembersSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetWorkspacesWorkspaceMembersSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetWorkspacesWorkspaceMembersSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetWorkspacesWorkspaceMembersRequest:
    path_params: GetWorkspacesWorkspaceMembersPathParams = field(default=None)
    security: GetWorkspacesWorkspaceMembersSecurity = field(default=None)
    

@dataclass
class GetWorkspacesWorkspaceMembersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_workspace_memberships: Optional[shared.PaginatedWorkspaceMemberships] = field(default=None)
    
