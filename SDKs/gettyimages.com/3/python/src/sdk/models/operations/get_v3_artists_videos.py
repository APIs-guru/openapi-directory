from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3ArtistsVideosQueryParams:
    artist_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'artist_name', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.ArtistsVideoSearchFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3ArtistsVideosHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class GetV3ArtistsVideosRequest:
    query_params: GetV3ArtistsVideosQueryParams = field(default=None)
    headers: GetV3ArtistsVideosHeaders = field(default=None)
    

@dataclass
class GetV3ArtistsVideosResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
