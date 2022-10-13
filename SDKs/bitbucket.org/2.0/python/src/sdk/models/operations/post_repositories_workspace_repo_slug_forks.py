from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostRepositoriesWorkspaceRepoSlugForksPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugForksSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugForksSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugForksSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugForksSecurity:
    option1: Optional[PostRepositoriesWorkspaceRepoSlugForksSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostRepositoriesWorkspaceRepoSlugForksSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostRepositoriesWorkspaceRepoSlugForksSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugForksRequest:
    path_params: PostRepositoriesWorkspaceRepoSlugForksPathParams = field(default=None)
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostRepositoriesWorkspaceRepoSlugForksSecurity = field(default=None)
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugForksResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    repository: Optional[dict[str, Any]] = field(default=None)
    
