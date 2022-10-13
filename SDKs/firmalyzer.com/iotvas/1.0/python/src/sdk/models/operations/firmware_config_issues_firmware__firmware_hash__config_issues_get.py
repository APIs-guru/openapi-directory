from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams:
    firmware_hash: str = field(default=None, metadata={'path_param': { 'field_name': 'firmware_hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetSecurity:
    api_key_header: shared.SchemeAPIKeyHeader = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetRequest:
    path_params: FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetPathParams = field(default=None)
    security: FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetSecurity = field(default=None)
    

@dataclass
class FirmwareConfigIssuesFirmwareFirmwareHashConfigIssuesGetResponse:
    config_issues: Optional[List[shared.ConfigIssue]] = field(default=None)
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
