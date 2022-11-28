from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GenerateDeviceAuthorizationCodeQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GenerateDeviceAuthorizationCodeRequest:
    query_params: GenerateDeviceAuthorizationCodeQueryParams = field()
    request: shared.DeviceRegistrationRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenerateDeviceAuthorizationCodeResponse:
    content_type: str = field()
    status_code: int = field()
    device_authorization_code: Optional[shared.DeviceAuthorizationCode] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
