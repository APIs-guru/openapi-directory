from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InvoiceAPISendToAccountantHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class InvoiceAPISendToAccountantRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    send_invoice_to_accountant_api_model: Optional[shared.SendInvoiceToAccountantAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    send_invoice_to_accountant_api_model1: Optional[shared.SendInvoiceToAccountantAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    send_invoice_to_accountant_api_model2: Optional[shared.SendInvoiceToAccountantAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_html: bytes = field(default=None, metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class InvoiceAPISendToAccountantRequest:
    headers: InvoiceAPISendToAccountantHeaders = field(default=None)
    request: InvoiceAPISendToAccountantRequests = field(default=None)
    

@dataclass
class InvoiceAPISendToAccountantResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    invoice_api_send_to_accountant_200_application_json_int32_integer: Optional[int] = field(default=None)
    invoice_api_send_to_accountant_200_text_json_int32_integer: Optional[int] = field(default=None)
    status_code: int = field(default=None)
    
