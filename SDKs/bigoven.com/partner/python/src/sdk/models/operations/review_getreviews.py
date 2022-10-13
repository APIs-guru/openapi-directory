from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReviewGetReviewsPathParams:
    recipe_id: int = field(default=None, metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReviewGetReviewsQueryParams:
    pg: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pg', 'style': 'form', 'explode': True }})
    rpp: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rpp', 'style': 'form', 'explode': True }})
    

@dataclass
class ReviewGetReviewsRequest:
    path_params: ReviewGetReviewsPathParams = field(default=None)
    query_params: ReviewGetReviewsQueryParams = field(default=None)
    

@dataclass
class ReviewGetReviewsResponse:
    big_oven_model_api_reviews: Optional[List[shared.BigOvenModelAPIReview]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
