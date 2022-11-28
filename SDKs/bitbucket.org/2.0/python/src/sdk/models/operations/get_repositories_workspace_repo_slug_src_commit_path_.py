from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams:
    commit: str = field(metadata={'path_param': { 'field_name': 'commit', 'style': 'simple', 'explode': False }})
    path: str = field(metadata={'path_param': { 'field_name': 'path', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum(str, Enum):
    META = "meta"
    RENDERED = "rendered"


@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams:
    format: Optional[GetRepositoriesWorkspaceRepoSlugSrcCommitPathFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    max_depth: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max_depth', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugSrcCommitPathPathParams = field()
    query_params: GetRepositoriesWorkspaceRepoSlugSrcCommitPathQueryParams = field()
    security: GetRepositoriesWorkspaceRepoSlugSrcCommitPathSecurity = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcCommitPathResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_treeentries: Optional[shared.PaginatedTreeentries] = field(default=None)
    
