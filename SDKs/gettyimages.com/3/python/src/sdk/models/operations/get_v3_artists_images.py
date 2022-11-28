from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
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
    headers: GetV3ArtistsImagesHeaders = field()
    query_params: GetV3ArtistsImagesQueryParams = field()
    

@dataclass
class GetV3ArtistsImagesResponse:
    content_type: str = field()
    status_code: int = field()
    
