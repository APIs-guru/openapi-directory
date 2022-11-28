from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetOrgPublicKeyPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetOrgPublicKeyRequest:
    path_params: ActionsGetOrgPublicKeyPathParams = field()
    

@dataclass
class ActionsGetOrgPublicKeyResponse:
    content_type: str = field()
    status_code: int = field()
    actions_public_key: Optional[shared.ActionsPublicKey] = field(default=None)
    
