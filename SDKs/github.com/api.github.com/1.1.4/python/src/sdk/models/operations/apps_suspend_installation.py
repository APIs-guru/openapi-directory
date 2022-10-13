from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsSuspendInstallationPathParams:
    installation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsSuspendInstallationRequest:
    path_params: AppsSuspendInstallationPathParams = field(default=None)
    

@dataclass
class AppsSuspendInstallationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
