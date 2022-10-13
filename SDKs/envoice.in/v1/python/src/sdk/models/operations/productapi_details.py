from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProductAPIDetailsQueryParams:
    id: int = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class ProductAPIDetailsHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class ProductAPIDetailsRequest:
    query_params: ProductAPIDetailsQueryParams = field(default=None)
    headers: ProductAPIDetailsHeaders = field(default=None)
    

@dataclass
class ProductAPIDetailsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    product_full_details_api_model: Optional[shared.ProductFullDetailsAPIModel] = field(default=None)
    status_code: int = field(default=None)
    
