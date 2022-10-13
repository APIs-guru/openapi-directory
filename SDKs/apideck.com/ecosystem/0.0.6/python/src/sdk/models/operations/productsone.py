from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProductsOnePathParams:
    ecosystem_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ecosystem_id', 'style': 'simple', 'explode': False }})
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductsOneRequest:
    path_params: ProductsOnePathParams = field(default=None)
    

@dataclass
class ProductsOneResponse:
    content_type: str = field(default=None)
    get_product_response: Optional[shared.GetProductResponse] = field(default=None)
    status_code: int = field(default=None)
    
