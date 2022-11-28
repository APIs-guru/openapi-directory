from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateShippingFulfillmentPathParams:
    order_id: str = field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateShippingFulfillmentSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateShippingFulfillmentRequest:
    path_params: CreateShippingFulfillmentPathParams = field()
    request: shared.ShippingFulfillmentDetails = field(metadata={'request': { 'media_type': 'application/json' }})
    security: CreateShippingFulfillmentSecurity = field()
    

@dataclass
class CreateShippingFulfillmentResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    create_shipping_fulfillment_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
