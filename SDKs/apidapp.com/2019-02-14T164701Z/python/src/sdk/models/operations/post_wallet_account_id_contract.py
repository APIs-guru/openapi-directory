from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostWalletAccountIDContractPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWalletAccountIDContractRequest:
    path_params: PostWalletAccountIDContractPathParams = field(default=None)
    

@dataclass
class PostWalletAccountIDContractResponse:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
