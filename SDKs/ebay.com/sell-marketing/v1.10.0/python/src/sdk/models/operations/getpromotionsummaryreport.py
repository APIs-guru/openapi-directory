from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPromotionSummaryReportQueryParams:
    marketplace_id: str = field(metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPromotionSummaryReportSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPromotionSummaryReportRequest:
    query_params: GetPromotionSummaryReportQueryParams = field()
    security: GetPromotionSummaryReportSecurity = field()
    

@dataclass
class GetPromotionSummaryReportResponse:
    content_type: str = field()
    status_code: int = field()
    summary_report_response: Optional[shared.SummaryReportResponse] = field(default=None)
    
