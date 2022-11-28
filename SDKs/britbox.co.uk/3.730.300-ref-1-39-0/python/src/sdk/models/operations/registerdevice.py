from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class RegisterDeviceQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class RegisterDeviceSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RegisterDeviceRequest:
    query_params: RegisterDeviceQueryParams = field()
    request: shared.DeviceRegistrationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: RegisterDeviceSecurity = field()
    

@dataclass
class RegisterDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    device: Optional[shared.Device] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
