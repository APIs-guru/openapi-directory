from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class RateItemPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RateItemQueryParams:
    rating: int = field(metadata={'query_param': { 'field_name': 'rating', 'style': 'form', 'explode': True }})
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class RateItemSecurity:
    profile_auth: shared.SchemeProfileAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RateItemRequest:
    path_params: RateItemPathParams = field()
    query_params: RateItemQueryParams = field()
    security: RateItemSecurity = field()
    

@dataclass
class RateItemResponse:
    content_type: str = field()
    status_code: int = field()
    service_error: Optional[shared.ServiceError] = field(default=None)
    user_rating: Optional[shared.UserRating] = field(default=None)
    
