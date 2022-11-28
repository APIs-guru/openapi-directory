from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProductRetrievePathParams:
    order_id: str = field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProductRetrieveSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProductRetrieveRequest:
    path_params: ProductRetrievePathParams = field()
    security: ProductRetrieveSecurity = field()
    

@dataclass
class ProductRetrieveResponse:
    content_type: str = field()
    status_code: int = field()
    product_retrieve_200_application_json_one_of: Optional[Any] = field(default=None)
    product_retrieve_default_application_json_any: Optional[Any] = field(default=None)
    
