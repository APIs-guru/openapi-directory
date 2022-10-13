from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetSnippetsWorkspacePathParams:
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetSnippetsWorkspaceRoleEnum(str, Enum):
    OWNER = "owner"
    CONTRIBUTOR = "contributor"
    MEMBER = "member"


@dataclass
class GetSnippetsWorkspaceQueryParams:
    role: Optional[GetSnippetsWorkspaceRoleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSnippetsWorkspaceSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSnippetsWorkspaceSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetSnippetsWorkspaceSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSnippetsWorkspaceSecurity:
    option1: Optional[GetSnippetsWorkspaceSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetSnippetsWorkspaceSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetSnippetsWorkspaceSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetSnippetsWorkspaceRequest:
    path_params: GetSnippetsWorkspacePathParams = field(default=None)
    query_params: GetSnippetsWorkspaceQueryParams = field(default=None)
    security: GetSnippetsWorkspaceSecurity = field(default=None)
    

@dataclass
class GetSnippetsWorkspaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_snippets: Optional[shared.PaginatedSnippets] = field(default=None)
    
