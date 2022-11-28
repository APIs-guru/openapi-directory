from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PostRepositoriesWorkspaceRepoSlugForksPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugForksSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugForksRequest:
    path_params: PostRepositoriesWorkspaceRepoSlugForksPathParams = field()
    security: PostRepositoriesWorkspaceRepoSlugForksSecurity = field()
    request: Optional[dict[str, Any]] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugForksResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    repository: Optional[dict[str, Any]] = field(default=None)
    
