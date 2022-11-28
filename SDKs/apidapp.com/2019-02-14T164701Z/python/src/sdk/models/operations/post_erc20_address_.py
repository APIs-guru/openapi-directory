from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostErc20AddressPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostErc20AddressRequest:
    path_params: PostErc20AddressPathParams = field()
    

@dataclass
class PostErc20AddressResponse:
    content_type: str = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
