from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUserStoreRecommendationsQueryParams:
    identity_cookie: float = field(default=None, metadata={'query_param': { 'field_name': 'identity_cookie', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserStoreRecommendationsRequest:
    query_params: GetUserStoreRecommendationsQueryParams = field(default=None)
    

@dataclass
class GetUserStoreRecommendationsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ibl: Optional[Any] = field(default=None)
    
