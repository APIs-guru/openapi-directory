from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class PostRepositoriesWorkspaceRepoSlugHooksPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugHooksSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugHooksSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugHooksSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugHooksSecurity:
    option1: Optional[PostRepositoriesWorkspaceRepoSlugHooksSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[PostRepositoriesWorkspaceRepoSlugHooksSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[PostRepositoriesWorkspaceRepoSlugHooksSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugHooksRequest:
    path_params: PostRepositoriesWorkspaceRepoSlugHooksPathParams = field(default=None)
    security: PostRepositoriesWorkspaceRepoSlugHooksSecurity = field(default=None)
    

@dataclass
class PostRepositoriesWorkspaceRepoSlugHooksResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    webhook_subscription: Optional[dict[str, Any]] = field(default=None)
    
