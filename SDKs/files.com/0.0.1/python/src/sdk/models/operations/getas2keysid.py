from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetAs2KeysIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAs2KeysIDRequest:
    path_params: GetAs2KeysIDPathParams = field()
    

@dataclass
class GetAs2KeysIDResponse:
    content_type: str = field()
    status_code: int = field()
    as2_key_entity: Optional[shared.As2KeyEntity] = field(default=None)
    
