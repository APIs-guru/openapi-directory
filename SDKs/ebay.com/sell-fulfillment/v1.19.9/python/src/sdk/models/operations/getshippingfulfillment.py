from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetShippingFulfillmentPathParams:
    fulfillment_id: str = field(metadata={'path_param': { 'field_name': 'fulfillmentId', 'style': 'simple', 'explode': False }})
    order_id: str = field(metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShippingFulfillmentSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShippingFulfillmentRequest:
    path_params: GetShippingFulfillmentPathParams = field()
    security: GetShippingFulfillmentSecurity = field()
    

@dataclass
class GetShippingFulfillmentResponse:
    content_type: str = field()
    status_code: int = field()
    shipping_fulfillment: Optional[shared.ShippingFulfillment] = field(default=None)
    
