from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductNotifierPathParams:
    notifier_id: str = field(metadata={'path_param': { 'field_name': 'notifierId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductNotifierSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductNotifierRequest:
    path_params: ProductNotifierPathParams = field()
    security: ProductNotifierSecurity = field()
    

@dataclass
class ProductNotifierResponse:
    content_type: str = field()
    status_code: int = field()
    product_notifier_200_application_json_any: Optional[Any] = field(default=None)
    product_notifier_default_application_json_any: Optional[Any] = field(default=None)
    
