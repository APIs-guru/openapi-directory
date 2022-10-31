from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3ArtistsImagesQueryParams:
    artist_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'artist_name', 'style': 'form', 'explode': True }})
    fields: Optional[List[shared.ArtistsImageSearchFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3ArtistsImagesHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3ArtistsImagesRequest:
    query_params: GetV3ArtistsImagesQueryParams = field(default=None)
    headers: GetV3ArtistsImagesHeaders = field(default=None)
    

@dataclass
class GetV3ArtistsImagesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
