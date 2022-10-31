from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InvoiceAPIDeleteHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvoiceAPIDeleteRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    invoice_delete_api_model: Optional[shared.InvoiceDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    invoice_delete_api_model1: Optional[shared.InvoiceDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    invoice_delete_api_model2: Optional[shared.InvoiceDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_html: bytes = field(default=None, metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class InvoiceAPIDeleteRequest:
    headers: InvoiceAPIDeleteHeaders = field(default=None)
    request: InvoiceAPIDeleteRequests = field(default=None)
    

@dataclass
class InvoiceAPIDeleteResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    invoice_api_delete_200_application_json_int32_integer: Optional[int] = field(default=None)
    invoice_api_delete_200_text_json_int32_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
