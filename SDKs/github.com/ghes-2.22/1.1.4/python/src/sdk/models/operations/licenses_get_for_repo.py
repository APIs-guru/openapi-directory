from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LicensesGetForRepoPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class LicensesGetForRepoRequest:
    path_params: LicensesGetForRepoPathParams = field(default=None)
    

@dataclass
class LicensesGetForRepoResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    license_content: Optional[shared.LicenseContent] = field(default=None)
    
