from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetShippingFulfillmentsPathParams:
    order_id: str = field(default=None, metadata={'path_param': { 'field_name': 'orderId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetShippingFulfillmentsSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetShippingFulfillmentsRequest:
    path_params: GetShippingFulfillmentsPathParams = field(default=None)
    security: GetShippingFulfillmentsSecurity = field(default=None)
    

@dataclass
class GetShippingFulfillmentsResponse:
    content_type: str = field(default=None)
    shipping_fulfillment_paged_collection: Optional[shared.ShippingFulfillmentPagedCollection] = field(default=None)
    status_code: int = field(default=None)
    
