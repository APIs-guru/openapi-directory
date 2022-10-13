from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUpcomingInvoiceQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpcomingInvoiceSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUpcomingInvoiceRequest:
    query_params: GetUpcomingInvoiceQueryParams = field(default=None)
    security: GetUpcomingInvoiceSecurity = field(default=None)
    

@dataclass
class GetUpcomingInvoiceResponse:
    content_type: str = field(default=None)
    itv_get_discount_response: Optional[shared.ItvGetDiscountResponse] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
