from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsGetOrgInstallationPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsGetOrgInstallationHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsGetOrgInstallationRequest:
    path_params: AppsGetOrgInstallationPathParams = field(default=None)
    headers: AppsGetOrgInstallationHeaders = field(default=None)
    

@dataclass
class AppsGetOrgInstallationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    installation_ghes_2: Optional[shared.InstallationGhes2] = field(default=None)
    
