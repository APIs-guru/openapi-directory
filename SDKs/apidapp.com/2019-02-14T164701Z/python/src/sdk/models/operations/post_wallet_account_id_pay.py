from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostWalletAccountIDPayPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWalletAccountIDPayRequest:
    path_params: PostWalletAccountIDPayPathParams = field()
    

@dataclass
class PostWalletAccountIDPayResponse:
    content_type: str = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
