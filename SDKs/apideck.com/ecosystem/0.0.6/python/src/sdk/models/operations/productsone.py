from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProductsOnePathParams:
    ecosystem_id: str = field(metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductsOneRequest:
    path_params: ProductsOnePathParams = field()
    

@dataclass
class ProductsOneResponse:
    content_type: str = field()
    status_code: int = field()
    get_product_response: Optional[shared.GetProductResponse] = field(default=None)
    
