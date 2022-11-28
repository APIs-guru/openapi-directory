from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUpcomingInvoiceQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpcomingInvoiceSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUpcomingInvoiceRequest:
    query_params: GetUpcomingInvoiceQueryParams = field()
    security: GetUpcomingInvoiceSecurity = field()
    

@dataclass
class GetUpcomingInvoiceResponse:
    content_type: str = field()
    status_code: int = field()
    itv_get_discount_response: Optional[shared.ItvGetDiscountResponse] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
