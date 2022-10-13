from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportsForCommitPathParams:
    commit: str = field(default=None, metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportsForCommitRequest:
    path_params: GetReportsForCommitPathParams = field(default=None)
    

@dataclass
class GetReportsForCommitResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    paginated_reports: Optional[shared.PaginatedReports] = field(default=None)
    
