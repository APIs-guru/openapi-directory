from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductOrderPathParams:
    sku: str = field(metadata={'path_param': { 'field_name': 'sku', 'style': 'simple', 'explode': False }})
    subject_id: str = field(metadata={'path_param': { 'field_name': 'subjectId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductOrderSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductOrderRequest:
    path_params: ProductOrderPathParams = field()
    security: ProductOrderSecurity = field()
    

@dataclass
class ProductOrderResponse:
    content_type: str = field()
    status_code: int = field()
    product_order_200_application_json_any: Optional[Any] = field(default=None)
    product_order_default_application_json_any: Optional[Any] = field(default=None)
    
