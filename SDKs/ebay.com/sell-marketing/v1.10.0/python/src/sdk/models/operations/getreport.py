from dataclasses import dataclass, field



@dataclass
class GetReportPathParams:
    report_id: str = field(default=None, metadata={'path_param': { 'field_name': 'report_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReportRequest:
    path_params: GetReportPathParams = field(default=None)
    security: GetReportSecurity = field(default=None)
    

@dataclass
class GetReportResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
