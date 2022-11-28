from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ReposGetAppsWithAccessToProtectedBranchPathParams:
    branch: str = field(metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetAppsWithAccessToProtectedBranchRequest:
    path_params: ReposGetAppsWithAccessToProtectedBranchPathParams = field()
    

@dataclass
class ReposGetAppsWithAccessToProtectedBranchResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    integrations: Optional[List[dict[str, Any]]] = field(default=None)
    
