from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAccountsNameRatingsPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    
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
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAccountsNameRatingsRequest:
    path_params: GetAccountsNameRatingsPathParams = field()
    query_params: GetAccountsNameRatingsQueryParams = field()
    security: GetAccountsNameRatingsSecurity = field()
    

@dataclass
class GetAccountsNameRatingsResponse:
    content_type: str = field()
    status_code: int = field()
    video_ratings: Optional[List[Any]] = field(default=None)
    
