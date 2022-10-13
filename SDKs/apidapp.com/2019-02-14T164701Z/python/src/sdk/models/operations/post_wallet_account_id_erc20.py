from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostWalletAccountIDErc20PathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWalletAccountIDErc20Request:
    path_params: PostWalletAccountIDErc20PathParams = field(default=None)
    

@dataclass
class PostWalletAccountIDErc20Response:
    content_type: str = field(default=None)
    empty: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
