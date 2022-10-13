from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRawGenreGroupsPathParams:
    pid: str = field(default=None, metadata={'path_param': { 'field_name': 'pid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRawGenreGroupsRequest:
    path_params: GetRawGenreGroupsPathParams = field(default=None)
    

@dataclass
class GetRawGenreGroupsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
