from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GenerateDeviceAuthorizationCodeQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GenerateDeviceAuthorizationCodeRequest:
    query_params: GenerateDeviceAuthorizationCodeQueryParams = field(default=None)
    request: shared.DeviceRegistrationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenerateDeviceAuthorizationCodeResponse:
    content_type: str = field(default=None)
    device_authorization_code: Optional[shared.DeviceAuthorizationCode] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
