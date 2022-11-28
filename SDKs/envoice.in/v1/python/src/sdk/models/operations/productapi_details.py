from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ProductAPIDetailsQueryParams:
    id: int = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class ProductAPIDetailsHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductAPIDetailsRequest:
    headers: ProductAPIDetailsHeaders = field()
    query_params: ProductAPIDetailsQueryParams = field()
    

@dataclass
class ProductAPIDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    product_full_details_api_model: Optional[shared.ProductFullDetailsAPIModel] = field(default=None)
    
