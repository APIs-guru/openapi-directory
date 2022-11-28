from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductNotifierCreatePathParams:
    order_id: str = field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    type: str = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    uri: str = field(metadata={'path_param': { 'field_name': 'uri', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductNotifierCreateSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductNotifierCreateRequest:
    path_params: ProductNotifierCreatePathParams = field()
    security: ProductNotifierCreateSecurity = field()
    

@dataclass
class ProductNotifierCreateResponse:
    content_type: str = field()
    status_code: int = field()
    product_notifier_create_200_application_json_any: Optional[Any] = field(default=None)
    product_notifier_create_default_application_json_any: Optional[Any] = field(default=None)
    
