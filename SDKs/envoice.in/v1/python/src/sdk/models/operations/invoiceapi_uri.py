from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class InvoiceAPIURIQueryParams:
    id: int = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class InvoiceAPIURIHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvoiceAPIURIRequest:
    headers: InvoiceAPIURIHeaders = field()
    query_params: InvoiceAPIURIQueryParams = field()
    

@dataclass
class InvoiceAPIURIResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    invoice_uri_api_model: Optional[shared.InvoiceURIAPIModel] = field(default=None)
    
