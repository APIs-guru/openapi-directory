from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PutSnippetsWorkspaceEncodedIDWatchPathParams:
    encoded_id: str = field(default=None, metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDWatchSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDWatchSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDWatchSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDWatchSecurity:
    option1: Optional[PutSnippetsWorkspaceEncodedIDWatchSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutSnippetsWorkspaceEncodedIDWatchSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PutSnippetsWorkspaceEncodedIDWatchSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutSnippetsWorkspaceEncodedIDWatchRequest:
    path_params: PutSnippetsWorkspaceEncodedIDWatchPathParams = field(default=None)
    security: PutSnippetsWorkspaceEncodedIDWatchSecurity = field(default=None)
    

@dataclass
class PutSnippetsWorkspaceEncodedIDWatchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_users: Optional[shared.PaginatedUsers] = field(default=None)
    
