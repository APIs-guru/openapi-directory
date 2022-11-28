from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsGetUserInstallationPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsGetUserInstallationRequest:
    path_params: AppsGetUserInstallationPathParams = field()
    

@dataclass
class AppsGetUserInstallationResponse:
    content_type: str = field()
    status_code: int = field()
    installation: Optional[shared.Installation] = field(default=None)
    
