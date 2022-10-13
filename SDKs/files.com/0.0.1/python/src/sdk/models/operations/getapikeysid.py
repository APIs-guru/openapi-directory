from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAPIKeysIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIKeysIDRequest:
    path_params: GetAPIKeysIDPathParams = field(default=None)
    

@dataclass
class GetAPIKeysIDResponse:
    api_key_entity: Optional[shared.APIKeyEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
