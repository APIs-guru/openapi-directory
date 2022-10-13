from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class RegisterDeviceQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class RegisterDeviceSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RegisterDeviceRequest:
    query_params: RegisterDeviceQueryParams = field(default=None)
    request: shared.DeviceRegistrationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RegisterDeviceSecurity = field(default=None)
    

@dataclass
class RegisterDeviceResponse:
    content_type: str = field(default=None)
    device: Optional[shared.Device] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
