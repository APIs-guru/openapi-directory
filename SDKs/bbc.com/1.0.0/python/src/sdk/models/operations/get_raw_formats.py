from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRawFormatsPathParams:
    pid: str = field(metadata={'path_param': { 'field_name': 'pid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRawFormatsRequest:
    path_params: GetRawFormatsPathParams = field()
    

@dataclass
class GetRawFormatsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
