from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReviewGetPathParams:
    recipe_id: int = field(metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    review_id: int = field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReviewGetRequest:
    path_params: ReviewGetPathParams = field()
    

@dataclass
class ReviewGetResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api_review: Optional[shared.BigOvenModelAPIReview] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
