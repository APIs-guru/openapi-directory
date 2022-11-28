from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetErc20AddressPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetErc20AddressRequest:
    path_params: GetErc20AddressPathParams = field()
    

@dataclass
class GetErc20AddressResponse:
    content_type: str = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
