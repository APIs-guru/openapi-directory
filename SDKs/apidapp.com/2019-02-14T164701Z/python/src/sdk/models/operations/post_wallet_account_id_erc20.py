from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostWalletAccountIDErc20PathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWalletAccountIDErc20Request:
    path_params: PostWalletAccountIDErc20PathParams = field()
    

@dataclass
class PostWalletAccountIDErc20Response:
    content_type: str = field()
    status_code: int = field()
    empty: Optional[dict[str, Any]] = field(default=None)
    
