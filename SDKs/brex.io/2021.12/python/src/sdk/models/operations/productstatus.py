from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProductStatusPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductStatusSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductStatusRequest:
    path_params: ProductStatusPathParams = field(default=None)
    security: ProductStatusSecurity = field(default=None)
    

@dataclass
class ProductStatusResponse:
    content_type: str = field(default=None)
    product_status_200_application_json_any: Optional[Any] = field(default=None)
    product_status_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
