from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DetectDeviceDetectPostSecurity:
    api_key_header: shared.SchemeAPIKeyHeader = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DetectDeviceDetectPostRequest:
    request: shared.DeviceFeatures = field(metadata={'request': { 'media_type': 'application/json' }})
    security: DetectDeviceDetectPostSecurity = field()
    

@dataclass
class DetectDeviceDetectPostResponse:
    content_type: str = field()
    status_code: int = field()
    device_info: Optional[shared.DeviceInfo] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    
