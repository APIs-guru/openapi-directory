from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrderAPIChangeStatusHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrderAPIChangeStatusRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_html: bytes = field(metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    change_order_status_api_model: Optional[shared.ChangeOrderStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    change_order_status_api_model1: Optional[shared.ChangeOrderStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    change_order_status_api_model2: Optional[shared.ChangeOrderStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class OrderAPIChangeStatusRequest:
    headers: OrderAPIChangeStatusHeaders = field()
    request: OrderAPIChangeStatusRequests = field()
    

@dataclass
class OrderAPIChangeStatusResponse:
    content_type: str = field()
    status_code: int = field()
    
