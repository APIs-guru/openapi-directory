from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposGetDeployKeyPathParams:
    key_id: int = field(metadata={'path_param': { 'field_name': 'key_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetDeployKeyRequest:
    path_params: ReposGetDeployKeyPathParams = field()
    

@dataclass
class ReposGetDeployKeyResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    deploy_key: Optional[shared.DeployKey] = field(default=None)
    
