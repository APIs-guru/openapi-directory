from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPromotionReportsQueryParams:
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    marketplace_id: str = field(default=None, metadata={'query_param': { 'field_name': 'marketplace_id', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    promotion_status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'promotion_status', 'style': 'form', 'explode': True }})
    promotion_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'promotion_type', 'style': 'form', 'explode': True }})
    q: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPromotionReportsSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPromotionReportsRequest:
    query_params: GetPromotionReportsQueryParams = field(default=None)
    security: GetPromotionReportsSecurity = field(default=None)
    

@dataclass
class GetPromotionReportsResponse:
    content_type: str = field(default=None)
    promotions_report_paged_collection: Optional[shared.PromotionsReportPagedCollection] = field(default=None)
    status_code: int = field(default=None)
    
