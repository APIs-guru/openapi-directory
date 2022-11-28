from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetRepoPublicKeyPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetRepoPublicKeyRequest:
    path_params: ActionsGetRepoPublicKeyPathParams = field()
    

@dataclass
class ActionsGetRepoPublicKeyResponse:
    content_type: str = field()
    status_code: int = field()
    actions_public_key: Optional[shared.ActionsPublicKey] = field(default=None)
    
