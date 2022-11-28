from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProductsAllPathParams:
    ecosystem_id: str = field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductsAllRequest:
    path_params: ProductsAllPathParams = field()
    

@dataclass
class ProductsAllResponse:
    content_type: str = field()
    status_code: int = field()
    get_products_response: Optional[shared.GetProductsResponse] = field(default=None)
    
