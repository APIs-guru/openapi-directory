from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductStatusPathParams:
    order_id: str = field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductStatusSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductStatusRequest:
    path_params: ProductStatusPathParams = field()
    security: ProductStatusSecurity = field()
    

@dataclass
class ProductStatusResponse:
    content_type: str = field()
    status_code: int = field()
    product_status_200_application_json_any: Optional[Any] = field(default=None)
    product_status_default_application_json_any: Optional[Any] = field(default=None)
    
