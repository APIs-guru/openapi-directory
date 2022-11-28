from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProductPathParams:
    epid: str = field(metadata={'path_param': { 'field_name': 'epid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProductRequest:
    path_params: GetProductPathParams = field()
    security: GetProductSecurity = field()
    

@dataclass
class GetProductResponse:
    content_type: str = field()
    status_code: int = field()
    product: Optional[shared.Product] = field(default=None)
    
