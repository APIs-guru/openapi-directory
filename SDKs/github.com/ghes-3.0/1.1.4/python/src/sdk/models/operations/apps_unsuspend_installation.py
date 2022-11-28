from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsUnsuspendInstallationPathParams:
    installation_id: int = field(metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsUnsuspendInstallationRequest:
    path_params: AppsUnsuspendInstallationPathParams = field()
    

@dataclass
class AppsUnsuspendInstallationResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
