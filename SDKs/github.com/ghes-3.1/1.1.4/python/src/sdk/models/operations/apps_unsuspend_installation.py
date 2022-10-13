from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsUnsuspendInstallationPathParams:
    installation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsUnsuspendInstallationRequest:
    path_params: AppsUnsuspendInstallationPathParams = field(default=None)
    

@dataclass
class AppsUnsuspendInstallationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
