from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProductOrderPathParams:
    sku: str = field(default=None, metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    subject_id: str = field(default=None, metadata={'path_param': { 'field_name': 'subjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductOrderSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductOrderRequest:
    path_params: ProductOrderPathParams = field(default=None)
    security: ProductOrderSecurity = field(default=None)
    

@dataclass
class ProductOrderResponse:
    content_type: str = field(default=None)
    product_order_200_application_json_any: Optional[Any] = field(default=None)
    product_order_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
