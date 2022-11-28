from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostProjectUsernameProjectBuildNumCancelPathParams:
    build_num: int = field(metadata={'path_param': { 'field_name': 'build_num', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProjectUsernameProjectBuildNumCancelRequest:
    path_params: PostProjectUsernameProjectBuildNumCancelPathParams = field()
    

@dataclass
class PostProjectUsernameProjectBuildNumCancelResponse:
    content_type: str = field()
    status_code: int = field()
    build: Optional[shared.Build] = field(default=None)
    
