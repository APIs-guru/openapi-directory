from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class ReposGetAppsWithAccessToProtectedBranchPathParams:
    branch: str = field(default=None, metadata={'path_param': { 'field_name': 'branch', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposGetAppsWithAccessToProtectedBranchRequest:
    path_params: ReposGetAppsWithAccessToProtectedBranchPathParams = field(default=None)
    

@dataclass
class ReposGetAppsWithAccessToProtectedBranchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    integrations: Optional[List[dict[str, Any]]] = field(default=None)
    
