from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class OptionsWalletAccountIDPayPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class OptionsWalletAccountIDPayRequest:
    path_params: OptionsWalletAccountIDPayPathParams = field(default=None)
    

@dataclass
class OptionsWalletAccountIDPayResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
