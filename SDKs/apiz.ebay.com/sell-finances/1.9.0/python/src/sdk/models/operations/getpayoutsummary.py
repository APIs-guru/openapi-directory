from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayoutSummaryQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPayoutSummarySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPayoutSummaryRequest:
    query_params: GetPayoutSummaryQueryParams = field()
    security: GetPayoutSummarySecurity = field()
    

@dataclass
class GetPayoutSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    payout_summary_response: Optional[shared.PayoutSummaryResponse] = field(default=None)
    
