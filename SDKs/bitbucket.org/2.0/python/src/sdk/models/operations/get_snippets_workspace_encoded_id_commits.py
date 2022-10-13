from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetSnippetsWorkspaceEncodedIDCommitsPathParams:
    encoded_id: str = field(default=None, metadata={'path_param': { 'field_name': 'encoded_id', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommitsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommitsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommitsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommitsSecurity:
    option1: Optional[GetSnippetsWorkspaceEncodedIDCommitsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetSnippetsWorkspaceEncodedIDCommitsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetSnippetsWorkspaceEncodedIDCommitsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommitsRequest:
    path_params: GetSnippetsWorkspaceEncodedIDCommitsPathParams = field(default=None)
    security: GetSnippetsWorkspaceEncodedIDCommitsSecurity = field(default=None)
    

@dataclass
class GetSnippetsWorkspaceEncodedIDCommitsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_snippet_commit: Optional[shared.PaginatedSnippetCommit] = field(default=None)
    
