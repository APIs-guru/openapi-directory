from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudapigeev1securityreport


@dataclass_json
@dataclass
class GoogleCloudApigeeV1ListSecurityReportsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    security_reports: Optional[List[googlecloudapigeev1securityreport.GoogleCloudApigeeV1SecurityReport]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityReports' }})
    
