from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetV1ProductsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV1ProductsIDRequest:
    path_params: GetV1ProductsIDPathParams = field()
    

@dataclass
class GetV1ProductsIDResponse:
    content_type: str = field()
    status_code: int = field()
    product_dto: Optional[shared.ProductDto] = field(default=None)
    
