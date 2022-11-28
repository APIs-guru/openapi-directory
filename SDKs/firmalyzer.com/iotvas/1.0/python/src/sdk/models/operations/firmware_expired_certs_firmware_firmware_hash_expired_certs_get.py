from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetPathParams:
    firmware_hash: str = field(metadata={'path_param': { 'field_name': 'firmware_hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetSecurity:
    api_key_header: shared.SchemeAPIKeyHeader = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetRequest:
    path_params: FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetPathParams = field()
    security: FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetSecurity = field()
    

@dataclass
class FirmwareExpiredCertsFirmwareFirmwareHashExpiredCertsGetResponse:
    content_type: str = field()
    status_code: int = field()
    expired_certs: Optional[List[shared.ExpiredCert]] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
