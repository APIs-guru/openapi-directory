from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class AuthorizeDeviceQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class AuthorizeDeviceSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AuthorizeDeviceRequest:
    query_params: AuthorizeDeviceQueryParams = field(default=None)
    request: shared.DeviceAuthorizationCode = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AuthorizeDeviceSecurity = field(default=None)
    

@dataclass
class AuthorizeDeviceResponse:
    content_type: str = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
