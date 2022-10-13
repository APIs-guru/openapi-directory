from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams:
    firmware_hash: str = field(default=None, metadata={'path_param': { 'field_name': 'firmware_hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity:
    api_key_header: shared.SchemeAPIKeyHeader = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetRequest:
    path_params: FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetPathParams = field(default=None)
    security: FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetSecurity = field(default=None)
    

@dataclass
class FirmwareWeakKeysFirmwareFirmwareHashWeakKeysGetResponse:
    content_type: str = field(default=None)
    crypto_keys: Optional[List[shared.CryptoKey]] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
