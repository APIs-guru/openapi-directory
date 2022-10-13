from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AppsRemoveRepoFromInstallationPathParams:
    installation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'installation_id', 'style': 'simple', 'explode': False }})
    repository_id: int = field(default=None, metadata={'path_param': { 'field_name': 'repository_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class AppsRemoveRepoFromInstallationRequest:
    path_params: AppsRemoveRepoFromInstallationPathParams = field(default=None)
    

@dataclass
class AppsRemoveRepoFromInstallationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
