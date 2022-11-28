from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ReviewDeletePathParams:
    recipe_id: int = field(metadata={'path_param': { 'field_name': 'recipeId', 'style': 'simple', 'explode': False }})
    review_id: int = field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReviewDeleteRequest:
    path_params: ReviewDeletePathParams = field()
    

@dataclass
class ReviewDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    system_object: Optional[dict[str, Any]] = field(default=None)
    
