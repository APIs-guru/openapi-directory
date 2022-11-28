from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostRepositoriesWorkspaceRepoSlugRefsTagsPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugRefsTagsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugRefsTagsRequest:
    path_params: PostRepositoriesWorkspaceRepoSlugRefsTagsPathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    security: PostRepositoriesWorkspaceRepoSlugRefsTagsSecurity = field()
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugRefsTagsResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    tag: Optional[dict[str, Any]] = field(default=None)
    
