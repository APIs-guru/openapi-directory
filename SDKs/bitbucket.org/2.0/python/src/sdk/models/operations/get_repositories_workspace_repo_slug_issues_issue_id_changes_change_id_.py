from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDPathParams:
    change_id: str = field(default=None, metadata={'path_param': { 'field_name': 'change_id', 'style': 'simple', 'explode': False }})
    issue_id: str = field(default=None, metadata={'path_param': { 'field_name': 'issue_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDPathParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesChangeIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    issue_change: Optional[dict[str, Any]] = field(default=None)
    
