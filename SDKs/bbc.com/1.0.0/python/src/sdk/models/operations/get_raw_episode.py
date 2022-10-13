from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRawEpisodePathParams:
    pid: str = field(default=None, metadata={'path_param': { 'field_name': 'pid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRawEpisodeRequest:
    path_params: GetRawEpisodePathParams = field(default=None)
    

@dataclass
class GetRawEpisodeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    nitro: Optional[Any] = field(default=None)
    
