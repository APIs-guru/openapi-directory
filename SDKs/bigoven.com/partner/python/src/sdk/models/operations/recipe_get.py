from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeGetPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RecipeGetQueryParams:
    prefetch: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prefetch', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeGetRequest:
    path_params: RecipeGetPathParams = field()
    query_params: RecipeGetQueryParams = field()
    

@dataclass
class RecipeGetResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api2_recipe: Optional[shared.BigOvenModelApi2Recipe] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
