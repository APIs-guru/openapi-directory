from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProductPathParams:
    product_id: str = field(default=None, metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductRequest:
    path_params: GetProductPathParams = field(default=None)
    

@dataclass
class GetProductResponse:
    content_type: str = field(default=None)
    product_model: Optional[shared.ProductModel] = field(default=None)
    product_model_haljson: Optional[shared.ProductModelHaljson] = field(default=None)
    status_code: int = field(default=None)
    
