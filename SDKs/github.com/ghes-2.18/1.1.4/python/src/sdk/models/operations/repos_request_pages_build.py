from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposRequestPagesBuildPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposRequestPagesBuildRequest:
    path_params: ReposRequestPagesBuildPathParams = field(default=None)
    

@dataclass
class ReposRequestPagesBuildResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    page_build_status: Optional[shared.PageBuildStatus] = field(default=None)
    
