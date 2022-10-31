from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InvoiceAPISendToClientHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvoiceAPISendToClientRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    send_invoice_to_client_api_model: Optional[shared.SendInvoiceToClientAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    send_invoice_to_client_api_model1: Optional[shared.SendInvoiceToClientAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    send_invoice_to_client_api_model2: Optional[shared.SendInvoiceToClientAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_html: bytes = field(default=None, metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class InvoiceAPISendToClientRequest:
    headers: InvoiceAPISendToClientHeaders = field(default=None)
    request: InvoiceAPISendToClientRequests = field(default=None)
    

@dataclass
class InvoiceAPISendToClientResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    invoice_api_send_to_client_200_application_json_int32_integer: Optional[int] = field(default=None)
    invoice_api_send_to_client_200_text_json_int32_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
