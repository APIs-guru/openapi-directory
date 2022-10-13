from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateProductPathParams:
    product_id: str = field(default=None, metadata={'path_param': { 'field_name': 'productId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateProductRequests:
    update_product_request: Optional[shared.UpdateProductRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    update_product_request1: Optional[shared.UpdateProductRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    update_product_request2: Optional[shared.UpdateProductRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateProductRequest:
    path_params: UpdateProductPathParams = field(default=None)
    request: UpdateProductRequests = field(default=None)
    

@dataclass
class UpdateProductResponse:
    content_type: str = field(default=None)
    product_model: Optional[shared.ProductModel] = field(default=None)
    product_model_haljson: Optional[shared.ProductModelHaljson] = field(default=None)
    status_code: int = field(default=None)
    
