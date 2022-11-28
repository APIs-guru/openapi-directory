from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrderAPIChangeShippingDetailsQueryParams:
    order_id: int = field(metadata={'query_param': { 'field_name': 'orderId', 'style': 'form', 'explode': True }})
    

@dataclass
class OrderAPIChangeShippingDetailsHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrderAPIChangeShippingDetailsRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_html: bytes = field(metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    order_shipping_details_api_model: Optional[shared.OrderShippingDetailsAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    order_shipping_details_api_model1: Optional[shared.OrderShippingDetailsAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    order_shipping_details_api_model2: Optional[shared.OrderShippingDetailsAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class OrderAPIChangeShippingDetailsRequest:
    headers: OrderAPIChangeShippingDetailsHeaders = field()
    query_params: OrderAPIChangeShippingDetailsQueryParams = field()
    request: OrderAPIChangeShippingDetailsRequests = field()
    

@dataclass
class OrderAPIChangeShippingDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    
