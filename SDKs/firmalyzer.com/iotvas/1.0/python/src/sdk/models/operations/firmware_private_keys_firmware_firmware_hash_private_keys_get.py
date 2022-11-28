from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams:
    firmware_hash: str = field(metadata={'path_param': { 'field_name': 'firmware_hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity:
    api_key_header: shared.SchemeAPIKeyHeader = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetRequest:
    path_params: FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetPathParams = field()
    security: FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetSecurity = field()
    

@dataclass
class FirmwarePrivateKeysFirmwareFirmwareHashPrivateKeysGetResponse:
    content_type: str = field()
    status_code: int = field()
    crypto_keys: Optional[List[shared.CryptoKey]] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
