from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRawMasterbrandPathParams:
    mbid: str = field(default=None, metadata={'path_param': { 'field_name': 'mbid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRawMasterbrandRequest:
    path_params: GetRawMasterbrandPathParams = field(default=None)
    

@dataclass
class GetRawMasterbrandResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
