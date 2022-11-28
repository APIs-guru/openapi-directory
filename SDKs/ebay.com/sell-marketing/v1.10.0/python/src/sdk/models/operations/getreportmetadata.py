from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportMetadataSecurity:
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReportMetadataRequest:
    security: GetReportMetadataSecurity = field()
    

@dataclass
class GetReportMetadataResponse:
    content_type: str = field()
    status_code: int = field()
    report_metadatas: Optional[shared.ReportMetadatas] = field(default=None)
    
