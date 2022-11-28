from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRecipeReviewReviewIDPathParams:
    review_id: str = field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRecipeReviewReviewIDRequest:
    path_params: GetRecipeReviewReviewIDPathParams = field()
    

@dataclass
class GetRecipeReviewReviewIDResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api_review: Optional[shared.BigOvenModelAPIReview] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
