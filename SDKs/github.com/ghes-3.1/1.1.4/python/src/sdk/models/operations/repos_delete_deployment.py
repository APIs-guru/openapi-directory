from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposDeleteDeploymentPathParams:
    deployment_id: int = field(metadata={'path_param': { 'field_name': 'deployment_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDeleteDeploymentRequest:
    path_params: ReposDeleteDeploymentPathParams = field()
    

@dataclass
class ReposDeleteDeploymentResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error_simple: Optional[shared.ValidationErrorSimple] = field(default=None)
    
