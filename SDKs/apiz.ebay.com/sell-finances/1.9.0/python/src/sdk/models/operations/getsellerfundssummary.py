from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSellerFundsSummarySecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSellerFundsSummaryRequest:
    security: GetSellerFundsSummarySecurity = field(default=None)
    

@dataclass
class GetSellerFundsSummaryResponse:
    content_type: str = field(default=None)
    seller_funds_summary_response: Optional[shared.SellerFundsSummaryResponse] = field(default=None)
    status_code: int = field(default=None)
    
