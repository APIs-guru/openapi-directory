from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InvoiceAPIChangeStatusHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvoiceAPIChangeStatusRequests:
    application_xml: bytes = field(metadata={'request': { 'media_type': 'application/xml' }})
    text_html: bytes = field(metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(metadata={'request': { 'media_type': 'text/xml' }})
    change_status_api_model: Optional[shared.ChangeStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    change_status_api_model1: Optional[shared.ChangeStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    change_status_api_model2: Optional[shared.ChangeStatusAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class InvoiceAPIChangeStatusRequest:
    headers: InvoiceAPIChangeStatusHeaders = field()
    request: InvoiceAPIChangeStatusRequests = field()
    

@dataclass
class InvoiceAPIChangeStatusResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    invoice_api_change_status_200_application_json_boolean: Optional[bool] = field(default=None)
    invoice_api_change_status_200_text_json_boolean: Optional[bool] = field(default=None)
    
