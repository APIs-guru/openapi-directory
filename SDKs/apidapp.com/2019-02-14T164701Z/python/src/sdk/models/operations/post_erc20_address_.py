from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostErc20AddressPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostErc20AddressRequest:
    path_params: PostErc20AddressPathParams = field(default=None)
    

@dataclass
class PostErc20AddressResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
