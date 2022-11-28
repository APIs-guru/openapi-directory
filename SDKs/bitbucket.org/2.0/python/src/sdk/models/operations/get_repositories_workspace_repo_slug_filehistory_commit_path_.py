from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams:
    commit: str = field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams:
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    renames: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'renames', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams = field()
    query_params: GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams = field()
    security: GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_files: Optional[shared.PaginatedFiles] = field(default=None)
    
