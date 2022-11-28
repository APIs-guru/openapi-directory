from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsErc20AddressPathParams:
    address: str = field(metadata={'path_param': { 'field_name': 'address', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsErc20AddressRequest:
    path_params: OptionsErc20AddressPathParams = field()
    

@dataclass
class OptionsErc20AddressResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
