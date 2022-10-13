from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRawBrandPathParams:
    pid: str = field(default=None, metadata={'path_param': { 'field_name': 'pid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRawBrandRequest:
    path_params: GetRawBrandPathParams = field(default=None)
    

@dataclass
class GetRawBrandResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
