from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetSnippetsWorkspacePathParams:
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetSnippetsWorkspaceRoleEnum(str, Enum):
    OWNER = "owner"
    CONTRIBUTOR = "contributor"
    MEMBER = "member"


@dataclass
class GetSnippetsWorkspaceQueryParams:
    role: Optional[GetSnippetsWorkspaceRoleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'role', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSnippetsWorkspaceSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSnippetsWorkspaceRequest:
    path_params: GetSnippetsWorkspacePathParams = field()
    query_params: GetSnippetsWorkspaceQueryParams = field()
    security: GetSnippetsWorkspaceSecurity = field()
    

@dataclass
class GetSnippetsWorkspaceResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_snippets: Optional[shared.PaginatedSnippets] = field(default=None)
    
