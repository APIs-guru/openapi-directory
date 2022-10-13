from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
GET_PAYMENT_DISPUTE_SUMMARIES_SERVERS = [
	"https://apiz.ebay.com{basePath}",
]


@dataclass
class GetPaymentDisputeSummariesQueryParams:
    buyer_username: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'buyer_username', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    open_date_from: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'open_date_from', 'style': 'form', 'explode': True }})
    open_date_to: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'open_date_to', 'style': 'form', 'explode': True }})
    order_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'order_id', 'style': 'form', 'explode': True }})
    payment_dispute_status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'payment_dispute_status', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPaymentDisputeSummariesSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentDisputeSummariesRequest:
    server_url: Optional[str] = field(default=None)
    query_params: GetPaymentDisputeSummariesQueryParams = field(default=None)
    security: GetPaymentDisputeSummariesSecurity = field(default=None)
    

@dataclass
class GetPaymentDisputeSummariesResponse:
    content_type: str = field(default=None)
    dispute_summary_response: Optional[shared.DisputeSummaryResponse] = field(default=None)
    status_code: int = field(default=None)
    
