from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsGetRepoInstallationPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsGetRepoInstallationHeaders:
    accept: str = field(default=None, metadata={'header': { 'field_name': 'accept' }})
    

@dataclass
class AppsGetRepoInstallationRequest:
    path_params: AppsGetRepoInstallationPathParams = field(default=None)
    headers: AppsGetRepoInstallationHeaders = field(default=None)
    

@dataclass
class AppsGetRepoInstallationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    installation_ghes_2: Optional[shared.InstallationGhes2] = field(default=None)
    
