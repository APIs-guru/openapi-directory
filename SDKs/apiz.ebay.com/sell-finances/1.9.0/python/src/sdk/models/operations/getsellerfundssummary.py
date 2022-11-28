from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSellerFundsSummarySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSellerFundsSummaryRequest:
    security: GetSellerFundsSummarySecurity = field()
    

@dataclass
class GetSellerFundsSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    seller_funds_summary_response: Optional[shared.SellerFundsSummaryResponse] = field(default=None)
    
