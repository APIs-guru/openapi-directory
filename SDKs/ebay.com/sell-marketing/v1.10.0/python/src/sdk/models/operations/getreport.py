from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportPathParams:
    report_id: str = field(metadata={'path_param': { 'field_name': 'report_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReportRequest:
    path_params: GetReportPathParams = field()
    security: GetReportSecurity = field()
    

@dataclass
class GetReportResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
