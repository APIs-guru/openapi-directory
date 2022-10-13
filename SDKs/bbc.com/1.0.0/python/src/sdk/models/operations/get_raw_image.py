from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRawImagePathParams:
    pid: str = field(default=None, metadata={'path_param': { 'field_name': 'pid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRawImageRequest:
    path_params: GetRawImagePathParams = field(default=None)
    

@dataclass
class GetRawImageResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
