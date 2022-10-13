from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrderAPIChangeStatusHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class OrderAPIChangeStatusRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    change_order_status_api_model: Optional[shared.ChangeOrderStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    change_order_status_api_model1: Optional[shared.ChangeOrderStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    change_order_status_api_model2: Optional[shared.ChangeOrderStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_html: bytes = field(default=None, metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class OrderAPIChangeStatusRequest:
    headers: OrderAPIChangeStatusHeaders = field(default=None)
    request: OrderAPIChangeStatusRequests = field(default=None)
    

@dataclass
class OrderAPIChangeStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
