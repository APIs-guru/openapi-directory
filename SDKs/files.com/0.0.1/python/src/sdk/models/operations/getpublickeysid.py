from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPublicKeysIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPublicKeysIDRequest:
    path_params: GetPublicKeysIDPathParams = field(default=None)
    

@dataclass
class GetPublicKeysIDResponse:
    content_type: str = field(default=None)
    public_key_entity: Optional[shared.PublicKeyEntity] = field(default=None)
    status_code: int = field(default=None)
    
