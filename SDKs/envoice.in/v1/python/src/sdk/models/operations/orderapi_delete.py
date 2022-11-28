from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrderAPIDeleteHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrderAPIDeleteRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_html: bytes = field(metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    order_delete_api_model: Optional[shared.OrderDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    order_delete_api_model1: Optional[shared.OrderDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    order_delete_api_model2: Optional[shared.OrderDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class OrderAPIDeleteRequest:
    headers: OrderAPIDeleteHeaders = field()
    request: OrderAPIDeleteRequests = field()
    

@dataclass
class OrderAPIDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    order_api_delete_200_application_json_int32_integer: Optional[int] = field(default=None)
    order_api_delete_200_text_json_int32_integer: Optional[int] = field(default=None)
    
