from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetListingViolationsSummaryQueryParams:
    compliance_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'compliance_type', 'style': 'form', 'explode': True }})
    

@dataclass
class GetListingViolationsSummaryHeaders:
    x_ebay_c_marketplace_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-EBAY-C-MARKETPLACE-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetListingViolationsSummarySecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetListingViolationsSummaryRequest:
    query_params: GetListingViolationsSummaryQueryParams = field(default=None)
    headers: GetListingViolationsSummaryHeaders = field(default=None)
    security: GetListingViolationsSummarySecurity = field(default=None)
    

@dataclass
class GetListingViolationsSummaryResponse:
    compliance_summary: Optional[shared.ComplianceSummary] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
