from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsGetOrgInstallationPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsGetOrgInstallationRequest:
    path_params: AppsGetOrgInstallationPathParams = field()
    

@dataclass
class AppsGetOrgInstallationResponse:
    content_type: str = field()
    status_code: int = field()
    installation: Optional[shared.Installation] = field(default=None)
    
