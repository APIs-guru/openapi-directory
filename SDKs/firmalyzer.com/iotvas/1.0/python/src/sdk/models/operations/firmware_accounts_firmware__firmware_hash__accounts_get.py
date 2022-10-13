from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FirmwareAccountsFirmwareFirmwareHashAccountsGetPathParams:
    firmware_hash: str = field(default=None, metadata={'path_param': { 'field_name': 'firmware_hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class FirmwareAccountsFirmwareFirmwareHashAccountsGetSecurity:
    api_key_header: shared.SchemeAPIKeyHeader = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FirmwareAccountsFirmwareFirmwareHashAccountsGetRequest:
    path_params: FirmwareAccountsFirmwareFirmwareHashAccountsGetPathParams = field(default=None)
    security: FirmwareAccountsFirmwareFirmwareHashAccountsGetSecurity = field(default=None)
    

@dataclass
class FirmwareAccountsFirmwareFirmwareHashAccountsGetResponse:
    content_type: str = field(default=None)
    default_accounts: Optional[List[shared.DefaultAccount]] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
