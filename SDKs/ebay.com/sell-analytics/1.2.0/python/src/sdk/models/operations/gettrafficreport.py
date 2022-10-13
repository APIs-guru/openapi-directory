from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTrafficReportQueryParams:
    dimension: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'dimension', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    metric: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'metric', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTrafficReportSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetTrafficReportRequest:
    query_params: GetTrafficReportQueryParams = field(default=None)
    security: GetTrafficReportSecurity = field(default=None)
    

@dataclass
class GetTrafficReportResponse:
    content_type: str = field(default=None)
    report: Optional[shared.Report] = field(default=None)
    status_code: int = field(default=None)
    
