from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSnippetsWorkspaceEncodedIDCommentsPathParams:
    encoded_id: str = field(default=None, metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommentsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommentsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommentsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommentsSecurity:
    option1: Optional[GetSnippetsWorkspaceEncodedIDCommentsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetSnippetsWorkspaceEncodedIDCommentsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetSnippetsWorkspaceEncodedIDCommentsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommentsRequest:
    path_params: GetSnippetsWorkspaceEncodedIDCommentsPathParams = field(default=None)
    security: GetSnippetsWorkspaceEncodedIDCommentsSecurity = field(default=None)
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommentsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_snippet_comments: Optional[shared.PaginatedSnippetComments] = field(default=None)
    
