from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIKeysIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIKeysIDRequest:
    path_params: GetAPIKeysIDPathParams = field()
    

@dataclass
class GetAPIKeysIDResponse:
    content_type: str = field()
    status_code: int = field()
    api_key_entity: Optional[shared.APIKeyEntity] = field(default=None)
    
