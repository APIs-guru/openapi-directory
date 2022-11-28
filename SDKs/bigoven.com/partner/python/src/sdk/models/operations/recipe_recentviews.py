from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class RecipeRecentViewsQueryParams:
    pg: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pg', 'style': 'form', 'explode': True }})
    rpp: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rpp', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeRecentViewsRequest:
    query_params: RecipeRecentViewsQueryParams = field()
    

@dataclass
class RecipeRecentViewsResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_recipe_info_date_tuple2s: Optional[List[shared.BigOvenModelRecipeInfoDateTuple2]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
