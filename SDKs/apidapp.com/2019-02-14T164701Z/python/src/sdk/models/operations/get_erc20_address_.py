from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetErc20AddressPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetErc20AddressRequest:
    path_params: GetErc20AddressPathParams = field(default=None)
    

@dataclass
class GetErc20AddressResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
