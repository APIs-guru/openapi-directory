from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRawPromotionPathParams:
    pid: str = field(default=None, metadata={'path_param': { 'field_name': 'pid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRawPromotionRequest:
    path_params: GetRawPromotionPathParams = field(default=None)
    

@dataclass
class GetRawPromotionResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
