from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsGetRepoInstallationPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsGetRepoInstallationRequest:
    path_params: AppsGetRepoInstallationPathParams = field()
    

@dataclass
class AppsGetRepoInstallationResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    installation: Optional[shared.Installation] = field(default=None)
    
