from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathParams:
    issue_id: str = field(metadata={'path_param': { 'field_name': 'issue_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsRequest:
    path_params: PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathParams = field()
    security: PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurity = field()
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    
