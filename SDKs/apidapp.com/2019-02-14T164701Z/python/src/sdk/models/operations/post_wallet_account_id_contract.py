from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostWalletAccountIDContractPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWalletAccountIDContractRequest:
    path_params: PostWalletAccountIDContractPathParams = field()
    

@dataclass
class PostWalletAccountIDContractResponse:
    content_type: str = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
