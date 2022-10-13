from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ActionsGetOrgPublicKeyPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsGetOrgPublicKeyRequest:
    path_params: ActionsGetOrgPublicKeyPathParams = field(default=None)
    

@dataclass
class ActionsGetOrgPublicKeyResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    actions_public_key: Optional[shared.ActionsPublicKey] = field(default=None)
    
