from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPublicKeysIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPublicKeysIDRequest:
    path_params: GetPublicKeysIDPathParams = field()
    

@dataclass
class GetPublicKeysIDResponse:
    content_type: str = field()
    status_code: int = field()
    public_key_entity: Optional[shared.PublicKeyEntity] = field(default=None)
    
