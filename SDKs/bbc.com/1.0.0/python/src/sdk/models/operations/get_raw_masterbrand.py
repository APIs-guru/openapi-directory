from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRawMasterbrandPathParams:
    mbid: str = field(metadata={'path_param': { 'field_name': 'mbid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRawMasterbrandRequest:
    path_params: GetRawMasterbrandPathParams = field()
    

@dataclass
class GetRawMasterbrandResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
