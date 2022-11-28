from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProductPathParams:
    product_id: str = field(metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductRequest:
    path_params: GetProductPathParams = field()
    

@dataclass
class GetProductResponse:
    content_type: str = field()
    status_code: int = field()
    product_model: Optional[shared.ProductModel] = field(default=None)
    product_model_haljson: Optional[shared.ProductModelHaljson] = field(default=None)
    
