from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetEnvironmentPublicKeyPathParams:
    environment_name: str = field(metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    repository_id: int = field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetEnvironmentPublicKeyRequest:
    path_params: ActionsGetEnvironmentPublicKeyPathParams = field()
    

@dataclass
class ActionsGetEnvironmentPublicKeyResponse:
    content_type: str = field()
    status_code: int = field()
    actions_public_key: Optional[shared.ActionsPublicKey] = field(default=None)
    
