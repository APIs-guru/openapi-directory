from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRecipeRecipeIDReviewPathParams:
    recipe_id: int = field(default=None, metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRecipeRecipeIDReviewRequest:
    path_params: GetRecipeRecipeIDReviewPathParams = field(default=None)
    

@dataclass
class GetRecipeRecipeIDReviewResponse:
    big_oven_model_api_review: Optional[shared.BigOvenModelAPIReview] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
