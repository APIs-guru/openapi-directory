from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProductNotifierCreatePathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    uri: str = field(default=None, metadata={'path_param': { 'field_name': 'uri', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductNotifierCreateSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductNotifierCreateRequest:
    path_params: ProductNotifierCreatePathParams = field(default=None)
    security: ProductNotifierCreateSecurity = field(default=None)
    

@dataclass
class ProductNotifierCreateResponse:
    content_type: str = field(default=None)
    product_notifier_create_200_application_json_any: Optional[Any] = field(default=None)
    product_notifier_create_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
