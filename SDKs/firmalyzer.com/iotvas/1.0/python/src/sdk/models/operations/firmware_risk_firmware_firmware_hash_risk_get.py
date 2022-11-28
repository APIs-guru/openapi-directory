from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class FirmwareRiskFirmwareFirmwareHashRiskGetPathParams:
    firmware_hash: str = field(metadata={'path_param': { 'field_name': 'firmware_hash', 'style': 'simple', 'explode': False }})
    

@dataclass
class FirmwareRiskFirmwareFirmwareHashRiskGetSecurity:
    api_key_header: shared.SchemeAPIKeyHeader = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FirmwareRiskFirmwareFirmwareHashRiskGetRequest:
    path_params: FirmwareRiskFirmwareFirmwareHashRiskGetPathParams = field()
    security: FirmwareRiskFirmwareFirmwareHashRiskGetSecurity = field()
    

@dataclass
class FirmwareRiskFirmwareFirmwareHashRiskGetResponse:
    content_type: str = field()
    status_code: int = field()
    firmware_risk: Optional[shared.FirmwareRisk] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
