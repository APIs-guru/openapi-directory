from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportMetadataForReportTypePathParams:
    report_type: str = field(default=None, metadata={'path_param': { 'field_name': 'report_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportMetadataForReportTypeSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReportMetadataForReportTypeRequest:
    path_params: GetReportMetadataForReportTypePathParams = field(default=None)
    security: GetReportMetadataForReportTypeSecurity = field(default=None)
    

@dataclass
class GetReportMetadataForReportTypeResponse:
    content_type: str = field(default=None)
    report_metadata: Optional[shared.ReportMetadata] = field(default=None)
    status_code: int = field(default=None)
    
