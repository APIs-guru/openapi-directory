from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSnippetsWorkspaceEncodedIDWatchersPathParams:
    encoded_id: str = field(default=None, metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDWatchersSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDWatchersSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDWatchersSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDWatchersSecurity:
    option1: Optional[GetSnippetsWorkspaceEncodedIDWatchersSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetSnippetsWorkspaceEncodedIDWatchersSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetSnippetsWorkspaceEncodedIDWatchersSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDWatchersRequest:
    path_params: GetSnippetsWorkspaceEncodedIDWatchersPathParams = field(default=None)
    security: GetSnippetsWorkspaceEncodedIDWatchersSecurity = field(default=None)
    

@dataclass
class GetSnippetsWorkspaceEncodedIDWatchersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_users: Optional[shared.PaginatedUsers] = field(default=None)
    
