from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    spec: str = field(metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams:
    ignore_whitespace: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ignore_whitespace', 'style': 'form', 'explode': True }})
    merge: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'merge', 'style': 'form', 'explode': True }})
    path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    renames: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'renames', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDiffstatSpecRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugDiffstatSpecPathParams = field()
    query_params: GetRepositoriesWorkspaceRepoSlugDiffstatSpecQueryParams = field()
    security: GetRepositoriesWorkspaceRepoSlugDiffstatSpecSecurity = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDiffstatSpecResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_diffstats: Optional[shared.PaginatedDiffstats] = field(default=None)
    
