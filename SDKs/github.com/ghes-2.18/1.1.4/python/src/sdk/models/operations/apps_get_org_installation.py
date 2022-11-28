from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsGetOrgInstallationPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsGetOrgInstallationHeaders:
    accept: str = field(metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsGetOrgInstallationRequest:
    headers: AppsGetOrgInstallationHeaders = field()
    path_params: AppsGetOrgInstallationPathParams = field()
    

@dataclass
class AppsGetOrgInstallationResponse:
    content_type: str = field()
    status_code: int = field()
    installation_ghes_2: Optional[shared.InstallationGhes2] = field(default=None)
    
