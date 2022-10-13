from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetRepoPublicKeyPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetRepoPublicKeyRequest:
    path_params: ActionsGetRepoPublicKeyPathParams = field(default=None)
    

@dataclass
class ActionsGetRepoPublicKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_public_key: Optional[shared.ActionsPublicKey] = field(default=None)
    
