from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams:
    firmware_hash: str = field(metadata={'path_param': { 'field_name': 'firmware_hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetSecurity:
    api_key_header: shared.SchemeAPIKeyHeader = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest:
    path_params: FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams = field()
    security: FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetSecurity = field()
    

@dataclass
class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse:
    content_type: str = field()
    status_code: int = field()
    config_issues: Optional[List[shared.ConfigIssue]] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
