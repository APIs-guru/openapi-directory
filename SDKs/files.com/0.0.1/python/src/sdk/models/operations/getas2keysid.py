from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAs2KeysIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAs2KeysIDRequest:
    path_params: GetAs2KeysIDPathParams = field(default=None)
    

@dataclass
class GetAs2KeysIDResponse:
    as2_key_entity: Optional[shared.As2KeyEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
