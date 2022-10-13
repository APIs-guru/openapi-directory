from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetV3AffiliatesSearchImagesQueryParams:
    phrase: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    style: Optional[shared.AffiliateSearchStyleEnum] = field(default=None, metadata={'query_param': { 'field_name': 'style', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3AffiliatesSearchImagesHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class GetV3AffiliatesSearchImagesRequest:
    query_params: GetV3AffiliatesSearchImagesQueryParams = field(default=None)
    headers: GetV3AffiliatesSearchImagesHeaders = field(default=None)
    

@dataclass
class GetV3AffiliatesSearchImagesResponse:
    affiliate_image_search_response: Optional[shared.AffiliateImageSearchResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
