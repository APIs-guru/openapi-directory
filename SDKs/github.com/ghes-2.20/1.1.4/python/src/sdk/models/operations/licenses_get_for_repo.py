from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class LicensesGetForRepoPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class LicensesGetForRepoRequest:
    path_params: LicensesGetForRepoPathParams = field()
    

@dataclass
class LicensesGetForRepoResponse:
    content_type: str = field()
    status_code: int = field()
    license_content: Optional[shared.LicenseContent] = field(default=None)
    
