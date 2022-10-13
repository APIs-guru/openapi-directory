from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateProductPathParams:
    organization_id: str = field(default=None, metadata={'path_param': { 'field_name': 'organizationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateProductRequests:
    create_product_request: Optional[shared.CreateProductRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    create_product_request1: Optional[shared.CreateProductRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    create_product_request2: Optional[shared.CreateProductRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class CreateProductRequest:
    path_params: CreateProductPathParams = field(default=None)
    request: CreateProductRequests = field(default=None)
    

@dataclass
class CreateProductResponse:
    content_type: str = field(default=None)
    product_model: Optional[shared.ProductModel] = field(default=None)
    product_model_haljson: Optional[shared.ProductModelHaljson] = field(default=None)
    status_code: int = field(default=None)
    
