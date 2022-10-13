from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsErc20AddressPathParams:
    address: str = field(default=None, metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsErc20AddressRequest:
    path_params: OptionsErc20AddressPathParams = field(default=None)
    

@dataclass
class OptionsErc20AddressResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
