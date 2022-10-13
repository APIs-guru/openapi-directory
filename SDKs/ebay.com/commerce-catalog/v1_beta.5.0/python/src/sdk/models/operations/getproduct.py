from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetProductPathParams:
    epid: str = field(default=None, metadata={'path_param': { 'field_name': 'epid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProductSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetProductRequest:
    path_params: GetProductPathParams = field(default=None)
    security: GetProductSecurity = field(default=None)
    

@dataclass
class GetProductResponse:
    content_type: str = field(default=None)
    product: Optional[shared.Product] = field(default=None)
    status_code: int = field(default=None)
    
