from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RecipeRavesQueryParams:
    pg: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pg', 'style': 'form', 'explode': True }})
    rpp: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rpp', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeRavesRequest:
    query_params: RecipeRavesQueryParams = field()
    

@dataclass
class RecipeRavesResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_recipe_info_review_tuple2s: Optional[List[shared.BigOvenModelRecipeInfoReviewTuple2]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
