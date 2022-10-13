from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PaymentLinkAPIURIQueryParams:
    id: int = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class PaymentLinkAPIURIHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class PaymentLinkAPIURIRequest:
    query_params: PaymentLinkAPIURIQueryParams = field(default=None)
    headers: PaymentLinkAPIURIHeaders = field(default=None)
    

@dataclass
class PaymentLinkAPIURIResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    payment_link_uri_api_model: Optional[shared.PaymentLinkURIAPIModel] = field(default=None)
    status_code: int = field(default=None)
    
