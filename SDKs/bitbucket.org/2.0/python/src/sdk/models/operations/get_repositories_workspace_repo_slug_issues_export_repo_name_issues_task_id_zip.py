from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipPathParams:
    repo_name: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_name', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    task_id: str = field(default=None, metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipPathParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    issue_job_status: Optional[shared.IssueJobStatus] = field(default=None)
    
