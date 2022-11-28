from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsRemoveRepoFromInstallationPathParams:
    installation_id: int = field(metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    repository_id: int = field(metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsRemoveRepoFromInstallationRequest:
    path_params: AppsRemoveRepoFromInstallationPathParams = field()
    

@dataclass
class AppsRemoveRepoFromInstallationResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
