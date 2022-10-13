from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional


@dataclass
class GetAccountsNameRatingsPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
class GetAccountsNameRatingsRatingEnum(str, Enum):
    LIKE = "like"
    DISLIKE = "dislike"


@dataclass
class GetAccountsNameRatingsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    rating: Optional[GetAccountsNameRatingsRatingEnum] = field(default=None, metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccountsNameRatingsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAccountsNameRatingsRequest:
    path_params: GetAccountsNameRatingsPathParams = field(default=None)
    query_params: GetAccountsNameRatingsQueryParams = field(default=None)
    security: GetAccountsNameRatingsSecurity = field(default=None)
    

@dataclass
class GetAccountsNameRatingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_ratings: Optional[List[Any]] = field(default=None)
    
