from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesPathParams:
    issue_id: str = field(default=None, metadata={'path_param': { 'field_name': 'issue_id', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurity:
    option1: Optional[PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesRequest:
    path_params: PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesPathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesSecurity = field(default=None)
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugIssuesIssueIDChangesResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    issue_change: Optional[dict[str, Any]] = field(default=None)
    
