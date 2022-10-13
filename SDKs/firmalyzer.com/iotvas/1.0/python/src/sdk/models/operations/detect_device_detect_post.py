from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DetectDeviceDetectPostSecurity:
    api_key_header: shared.SchemeAPIKeyHeader = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DetectDeviceDetectPostRequest:
    request: shared.DeviceFeatures = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DetectDeviceDetectPostSecurity = field(default=None)
    

@dataclass
class DetectDeviceDetectPostResponse:
    content_type: str = field(default=None)
    device_info: Optional[shared.DeviceInfo] = field(default=None)
    http_validation_error: Optional[shared.HTTPValidationError] = field(default=None)
    status_code: int = field(default=None)
    
