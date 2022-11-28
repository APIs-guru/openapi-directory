from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsWalletAccountIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsWalletAccountIDRequest:
    path_params: OptionsWalletAccountIDPathParams = field()
    

@dataclass
class OptionsWalletAccountIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
