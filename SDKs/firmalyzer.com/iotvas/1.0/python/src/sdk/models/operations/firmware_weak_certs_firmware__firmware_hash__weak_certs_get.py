from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetPathParams:
    firmware_hash: str = field(default=None, metadata={'path_param': { 'field_name': 'firmware_hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetSecurity:
    api_key_header: shared.SchemeAPIKeyHeader = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetRequest:
    path_params: FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetPathParams = field(default=None)
    security: FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetSecurity = field(default=None)
    

@dataclass
class FirmwareWeakCertsFirmwareFirmwareHashWeakCertsGetResponse:
    content_type: str = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    weak_certs: Optional[List[shared.WeakCert]] = field(default=None)
    
