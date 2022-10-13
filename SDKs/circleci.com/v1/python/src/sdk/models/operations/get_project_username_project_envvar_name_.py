from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProjectUsernameProjectEnvvarNamePathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectUsernameProjectEnvvarNameRequest:
    path_params: GetProjectUsernameProjectEnvvarNamePathParams = field(default=None)
    

@dataclass
class GetProjectUsernameProjectEnvvarNameResponse:
    content_type: str = field(default=None)
    envvar: Optional[shared.Envvar] = field(default=None)
    status_code: int = field(default=None)
    
