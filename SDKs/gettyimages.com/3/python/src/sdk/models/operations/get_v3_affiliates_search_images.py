from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetV3AffiliatesSearchImagesQueryParams:
    phrase: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    style: Optional[shared.AffiliateSearchStyleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'style', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3AffiliatesSearchImagesHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3AffiliatesSearchImagesRequest:
    headers: GetV3AffiliatesSearchImagesHeaders = field()
    query_params: GetV3AffiliatesSearchImagesQueryParams = field()
    

@dataclass
class GetV3AffiliatesSearchImagesResponse:
    content_type: str = field()
    status_code: int = field()
    affiliate_image_search_response: Optional[shared.AffiliateImageSearchResponse] = field(default=None)
    
