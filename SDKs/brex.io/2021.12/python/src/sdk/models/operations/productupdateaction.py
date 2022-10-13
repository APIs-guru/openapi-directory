from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProductUpdateActionPathParams:
    action: str = field(default=None, metadata={'path_param': { 'field_name': 'action', 'style': 'simple', 'explode': False }})
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductUpdateActionRequestBody:
    credits: Optional[float] = field(default=None, metadata={'form': { 'field_name': 'credits' }})
    

@dataclass
class ProductUpdateActionSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductUpdateActionRequest:
    path_params: ProductUpdateActionPathParams = field(default=None)
    request: Optional[ProductUpdateActionRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: ProductUpdateActionSecurity = field(default=None)
    

@dataclass
class ProductUpdateActionResponse:
    content_type: str = field(default=None)
    product_update_action_200_application_json_any: Optional[Any] = field(default=None)
    product_update_action_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
