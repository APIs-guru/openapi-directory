from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    
class GetRepositoriesWorkspaceRepoSlugSrcFormatEnum(str, Enum):
    META = "meta"


@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcQueryParams:
    format: Optional[GetRepositoriesWorkspaceRepoSlugSrcFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugSrcPathParams = field()
    query_params: GetRepositoriesWorkspaceRepoSlugSrcQueryParams = field()
    security: GetRepositoriesWorkspaceRepoSlugSrcSecurity = field()
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugSrcResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_treeentries: Optional[shared.PaginatedTreeentries] = field(default=None)
    
