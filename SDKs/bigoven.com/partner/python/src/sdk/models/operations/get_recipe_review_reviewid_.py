from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRecipeReviewReviewIDPathParams:
    review_id: str = field(default=None, metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRecipeReviewReviewIDRequest:
    path_params: GetRecipeReviewReviewIDPathParams = field(default=None)
    

@dataclass
class GetRecipeReviewReviewIDResponse:
    big_oven_model_api_review: Optional[shared.BigOvenModelAPIReview] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
