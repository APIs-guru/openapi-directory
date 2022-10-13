from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1ProductsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1ProductsIDRequest:
    path_params: GetV1ProductsIDPathParams = field(default=None)
    

@dataclass
class GetV1ProductsIDResponse:
    content_type: str = field(default=None)
    product_dto: Optional[shared.ProductDto] = field(default=None)
    status_code: int = field(default=None)
    
