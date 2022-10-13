from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVotePathParams:
    issue_id: str = field(default=None, metadata={'path_param': { 'field_name': 'issue_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurity:
    option1: Optional[PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteRequest:
    path_params: PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVotePathParams = field(default=None)
    security: PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteSecurity = field(default=None)
    

@dataclass
class PutRepositoriesWorkspaceRepoSlugIssuesIssueIDVoteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
