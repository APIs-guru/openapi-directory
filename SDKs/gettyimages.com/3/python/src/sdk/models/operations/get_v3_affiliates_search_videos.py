from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3AffiliatesSearchVideosQueryParams:
    phrase: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3AffiliatesSearchVideosHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class GetV3AffiliatesSearchVideosRequest:
    query_params: GetV3AffiliatesSearchVideosQueryParams = field(default=None)
    headers: GetV3AffiliatesSearchVideosHeaders = field(default=None)
    

@dataclass
class GetV3AffiliatesSearchVideosResponse:
    affiliate_video_search_response: Optional[shared.AffiliateVideoSearchResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
