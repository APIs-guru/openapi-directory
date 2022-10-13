from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetReportMetadataSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetReportMetadataRequest:
    security: GetReportMetadataSecurity = field(default=None)
    

@dataclass
class GetReportMetadataResponse:
    content_type: str = field(default=None)
    report_metadatas: Optional[shared.ReportMetadatas] = field(default=None)
    status_code: int = field(default=None)
    
