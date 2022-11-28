from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetDeploymentPathParams:
    deployment_id: int = field(metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetDeploymentRequest:
    path_params: ReposGetDeploymentPathParams = field()
    

@dataclass
class ReposGetDeploymentResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    deployment: Optional[shared.Deployment] = field(default=None)
    
