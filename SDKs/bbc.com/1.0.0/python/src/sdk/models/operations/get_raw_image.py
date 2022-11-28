from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRawImagePathParams:
    pid: str = field(metadata={'path_param': { 'field_name': 'pid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRawImageRequest:
    path_params: GetRawImagePathParams = field()
    

@dataclass
class GetRawImageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
