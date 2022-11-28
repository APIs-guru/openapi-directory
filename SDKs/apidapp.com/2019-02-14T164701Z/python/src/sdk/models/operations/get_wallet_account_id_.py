from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetWalletAccountIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWalletAccountIDRequest:
    path_params: GetWalletAccountIDPathParams = field()
    

@dataclass
class GetWalletAccountIDResponse:
    content_type: str = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
