from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsGetUserInstallationPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsGetUserInstallationRequest:
    path_params: AppsGetUserInstallationPathParams = field(default=None)
    

@dataclass
class AppsGetUserInstallationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    installation: Optional[shared.Installation] = field(default=None)
    
