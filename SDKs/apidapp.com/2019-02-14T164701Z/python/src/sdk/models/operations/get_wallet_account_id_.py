from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetWalletAccountIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWalletAccountIDRequest:
    path_params: GetWalletAccountIDPathParams = field(default=None)
    

@dataclass
class GetWalletAccountIDResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
