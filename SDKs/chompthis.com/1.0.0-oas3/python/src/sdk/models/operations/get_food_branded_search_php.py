from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetFoodBrandedSearchPhpDietEnum(str, Enum):
    VEGAN = "Vegan"
    VEGETARIAN = "Vegetarian"
    GLUTEN_FREE = "Gluten Free"


@dataclass
class GetFoodBrandedSearchPhpQueryParams:
    allergen: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'allergen', 'style': 'form', 'explode': True }})
    brand: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'brand', 'style': 'form', 'explode': True }})
    category: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'category', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    diet: Optional[GetFoodBrandedSearchPhpDietEnum] = field(default=None, metadata={'query_param': { 'field_name': 'diet', 'style': 'form', 'explode': True }})
    ingredient: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ingredient', 'style': 'form', 'explode': True }})
    keyword: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'keyword', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    mineral: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mineral', 'style': 'form', 'explode': True }})
    nutrient: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nutrient', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    palm_oil: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'palm_oil', 'style': 'form', 'explode': True }})
    trace: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'trace', 'style': 'form', 'explode': True }})
    vitamin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vitamin', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFoodBrandedSearchPhpSecurity:
    api_key_auth: shared.SchemeAPIKeyAuth = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'query' }})
    

@dataclass
class GetFoodBrandedSearchPhpRequest:
    query_params: GetFoodBrandedSearchPhpQueryParams = field()
    security: GetFoodBrandedSearchPhpSecurity = field()
    

@dataclass
class GetFoodBrandedSearchPhpResponse:
    content_type: str = field()
    status_code: int = field()
    branded_food_object: Optional[shared.BrandedFoodObject] = field(default=None)
    
