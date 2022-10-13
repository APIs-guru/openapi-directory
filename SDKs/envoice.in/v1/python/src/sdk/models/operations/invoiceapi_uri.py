from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InvoiceAPIURIQueryParams:
    id: int = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class InvoiceAPIURIHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class InvoiceAPIURIRequest:
    query_params: InvoiceAPIURIQueryParams = field(default=None)
    headers: InvoiceAPIURIHeaders = field(default=None)
    

@dataclass
class InvoiceAPIURIResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    invoice_uri_api_model: Optional[shared.InvoiceURIAPIModel] = field(default=None)
    status_code: int = field(default=None)
    
