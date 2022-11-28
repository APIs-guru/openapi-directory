from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV3AffiliatesSearchVideosQueryParams:
    phrase: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'phrase', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3AffiliatesSearchVideosHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3AffiliatesSearchVideosRequest:
    headers: GetV3AffiliatesSearchVideosHeaders = field()
    query_params: GetV3AffiliatesSearchVideosQueryParams = field()
    

@dataclass
class GetV3AffiliatesSearchVideosResponse:
    content_type: str = field()
    status_code: int = field()
    affiliate_video_search_response: Optional[shared.AffiliateVideoSearchResponse] = field(default=None)
    
