from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportMetadataForReportTypePathParams:
    report_type: str = field(metadata={'path_param': { 'field_name': 'report_type', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReportMetadataForReportTypeSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReportMetadataForReportTypeRequest:
    path_params: GetReportMetadataForReportTypePathParams = field()
    security: GetReportMetadataForReportTypeSecurity = field()
    

@dataclass
class GetReportMetadataForReportTypeResponse:
    content_type: str = field()
    status_code: int = field()
    report_metadata: Optional[shared.ReportMetadata] = field(default=None)
    
