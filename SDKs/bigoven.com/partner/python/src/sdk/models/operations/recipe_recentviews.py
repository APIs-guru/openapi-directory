from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RecipeRecentViewsQueryParams:
    pg: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pg', 'style': 'form', 'explode': True }})
    rpp: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rpp', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeRecentViewsRequest:
    query_params: RecipeRecentViewsQueryParams = field(default=None)
    

@dataclass
class RecipeRecentViewsResponse:
    big_oven_model_recipe_info_date_tuple2s: Optional[List[shared.BigOvenModelRecipeInfoDateTuple2]] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
