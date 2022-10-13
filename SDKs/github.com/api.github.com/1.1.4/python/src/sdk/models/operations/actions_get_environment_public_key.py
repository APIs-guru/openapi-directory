from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetEnvironmentPublicKeyPathParams:
    environment_name: str = field(default=None, metadata={'path_param': { 'field_name': 'environment_name', 'style': 'simple', 'explode': False }})
    repository_id: int = field(default=None, metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetEnvironmentPublicKeyRequest:
    path_params: ActionsGetEnvironmentPublicKeyPathParams = field(default=None)
    

@dataclass
class ActionsGetEnvironmentPublicKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_public_key: Optional[shared.ActionsPublicKey] = field(default=None)
    
