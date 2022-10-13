from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProductNotifierPathParams:
    notifier_id: str = field(default=None, metadata={'path_param': { 'field_name': 'notifierId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductNotifierSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductNotifierRequest:
    path_params: ProductNotifierPathParams = field(default=None)
    security: ProductNotifierSecurity = field(default=None)
    

@dataclass
class ProductNotifierResponse:
    content_type: str = field(default=None)
    product_notifier_200_application_json_any: Optional[Any] = field(default=None)
    product_notifier_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
