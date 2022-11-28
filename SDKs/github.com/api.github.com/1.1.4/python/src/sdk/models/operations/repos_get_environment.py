from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetEnvironmentPathParams:
    environment_name: str = field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetEnvironmentRequest:
    path_params: ReposGetEnvironmentPathParams = field()
    

@dataclass
class ReposGetEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    environment: Optional[shared.Environment] = field(default=None)
    
