from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetPreReceiveEnvironmentPathParams:
    pre_receive_environment_id: int = field(metadata={'path_param': { 'field_name': 'pre_receive_environment_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetPreReceiveEnvironmentRequest:
    path_params: EnterpriseAdminGetPreReceiveEnvironmentPathParams = field()
    

@dataclass
class EnterpriseAdminGetPreReceiveEnvironmentResponse:
    content_type: str = field()
    status_code: int = field()
    pre_receive_environment: Optional[shared.PreReceiveEnvironment] = field(default=None)
    
