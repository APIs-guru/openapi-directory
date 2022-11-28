from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposRequestPagesBuildPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposRequestPagesBuildRequest:
    path_params: ReposRequestPagesBuildPathParams = field()
    

@dataclass
class ReposRequestPagesBuildResponse:
    content_type: str = field()
    status_code: int = field()
    page_build_status: Optional[shared.PageBuildStatus] = field(default=None)
    
