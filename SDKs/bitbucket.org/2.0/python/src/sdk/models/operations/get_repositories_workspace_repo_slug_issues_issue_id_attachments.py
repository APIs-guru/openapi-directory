from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathParams:
    issue_id: str = field(default=None, metadata={'path_param': { 'field_name': 'issue_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsPathParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDAttachmentsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_issue_attachments: Optional[shared.PaginatedIssueAttachments] = field(default=None)
    
