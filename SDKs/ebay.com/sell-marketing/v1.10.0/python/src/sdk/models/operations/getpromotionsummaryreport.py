from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPromotionSummaryReportQueryParams:
    marketplace_id: str = field(default=None, metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPromotionSummaryReportSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPromotionSummaryReportRequest:
    query_params: GetPromotionSummaryReportQueryParams = field(default=None)
    security: GetPromotionSummaryReportSecurity = field(default=None)
    

@dataclass
class GetPromotionSummaryReportResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    summary_report_response: Optional[shared.SummaryReportResponse] = field(default=None)
    
