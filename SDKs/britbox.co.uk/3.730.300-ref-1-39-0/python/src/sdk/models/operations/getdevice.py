from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetDevicePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceQueryParams:
    ff: Optional[List[shared.FeatureFlagsEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'ff', 'style': 'form', 'explode': False }})
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetDeviceRequest:
    path_params: GetDevicePathParams = field()
    query_params: GetDeviceQueryParams = field()
    security: GetDeviceSecurity = field()
    

@dataclass
class GetDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    device: Optional[shared.Device] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
