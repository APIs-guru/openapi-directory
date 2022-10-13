from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SrcSearchlyAPIV1ControllersSongSearchQueryParams:
    query: str = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    

@dataclass
class SrcSearchlyAPIV1ControllersSongSearchRequest:
    query_params: SrcSearchlyAPIV1ControllersSongSearchQueryParams = field(default=None)
    

@dataclass
class SrcSearchlyAPIV1ControllersSongSearchResponse:
    api_response_song: Optional[shared.APIResponseSong] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
