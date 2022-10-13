from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CreateShippingFulfillmentPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateShippingFulfillmentSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CreateShippingFulfillmentRequest:
    path_params: CreateShippingFulfillmentPathParams = field(default=None)
    request: shared.ShippingFulfillmentDetails = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreateShippingFulfillmentSecurity = field(default=None)
    

@dataclass
class CreateShippingFulfillmentResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    create_shipping_fulfillment_201_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
