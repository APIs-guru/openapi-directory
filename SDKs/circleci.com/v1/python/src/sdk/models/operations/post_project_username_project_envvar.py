from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostProjectUsernameProjectEnvvarPathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostProjectUsernameProjectEnvvarRequest:
    path_params: PostProjectUsernameProjectEnvvarPathParams = field(default=None)
    

@dataclass
class PostProjectUsernameProjectEnvvarResponse:
    content_type: str = field(default=None)
    envvar: Optional[shared.Envvar] = field(default=None)
    status_code: int = field(default=None)
    
