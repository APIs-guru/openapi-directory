from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    spec: str = field(default=None, metadata={'path_param': { 'field_name': 'spec', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams:
    binary: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'binary', 'style': 'form', 'explode': True }})
    context: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'context', 'style': 'form', 'explode': True }})
    ignore_whitespace: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ignore_whitespace', 'style': 'form', 'explode': True }})
    merge: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'merge', 'style': 'form', 'explode': True }})
    path: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'path', 'style': 'form', 'explode': True }})
    renames: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'renames', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity:
    option1: Optional[GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDiffSpecRequest:
    path_params: GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams = field(default=None)
    query_params: GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams = field(default=None)
    security: GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity = field(default=None)
    

@dataclass
class GetRepositoriesWorkspaceRepoSlugDiffSpecResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
