from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipPathParams:
    repo_name: str = field(metadata={'path_param': { 'field_name': 'repo_name', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    task_id: str = field(metadata={'path_param': { 'field_name': 'task_id', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipPathParams = field()
    security: GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipSecurity = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIDZipResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    issue_job_status: Optional[shared.IssueJobStatus] = field(default=None)
    
