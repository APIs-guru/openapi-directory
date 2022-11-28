from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetListingViolationsSummaryQueryParams:
    compliance_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'compliance_type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingViolationsSummaryHeaders:
    x_ebay_c_marketplace_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingViolationsSummarySecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListingViolationsSummaryRequest:
    headers: GetListingViolationsSummaryHeaders = field()
    query_params: GetListingViolationsSummaryQueryParams = field()
    security: GetListingViolationsSummarySecurity = field()
    

@dataclass
class GetListingViolationsSummaryResponse:
    content_type: str = field()
    status_code: int = field()
    compliance_summary: Optional[shared.ComplianceSummary] = field(default=None)
    
