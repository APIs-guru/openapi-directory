from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProductsAllPathParams:
    ecosystem_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductsAllRequest:
    path_params: ProductsAllPathParams = field(default=None)
    

@dataclass
class ProductsAllResponse:
    content_type: str = field(default=None)
    get_products_response: Optional[shared.GetProductsResponse] = field(default=None)
    status_code: int = field(default=None)
    
