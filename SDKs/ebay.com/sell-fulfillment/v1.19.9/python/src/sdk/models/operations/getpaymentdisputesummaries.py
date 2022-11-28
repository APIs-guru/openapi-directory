from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
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
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPaymentDisputeSummariesRequest:
    query_params: GetPaymentDisputeSummariesQueryParams = field()
    security: GetPaymentDisputeSummariesSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class GetPaymentDisputeSummariesResponse:
    content_type: str = field()
    status_code: int = field()
    dispute_summary_response: Optional[shared.DisputeSummaryResponse] = field(default=None)
    
