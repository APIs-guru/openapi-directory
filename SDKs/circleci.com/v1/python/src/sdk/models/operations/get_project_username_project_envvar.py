from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProjectUsernameProjectEnvvarPathParams:
    project: str = field(default=None, metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectUsernameProjectEnvvarRequest:
    path_params: GetProjectUsernameProjectEnvvarPathParams = field(default=None)
    

@dataclass
class GetProjectUsernameProjectEnvvarResponse:
    content_type: str = field(default=None)
    envvars: Optional[List[shared.Envvar]] = field(default=None)
    status_code: int = field(default=None)
    
