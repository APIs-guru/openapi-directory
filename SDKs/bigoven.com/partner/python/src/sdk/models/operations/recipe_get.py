from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RecipeGetPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RecipeGetQueryParams:
    prefetch: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'prefetch', 'style': 'form', 'explode': True }})
    

@dataclass
class RecipeGetRequest:
    path_params: RecipeGetPathParams = field(default=None)
    query_params: RecipeGetQueryParams = field(default=None)
    

@dataclass
class RecipeGetResponse:
    big_oven_model_api2_recipe: Optional[shared.BigOvenModelApi2Recipe] = field(default=None)
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
