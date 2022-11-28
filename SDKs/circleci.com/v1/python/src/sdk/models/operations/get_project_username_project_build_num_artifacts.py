from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetProjectUsernameProjectBuildNumArtifactsPathParams:
    build_num: int = field(metadata={'path_param': { 'field_name': 'build_num', 'style': 'simple', 'explode': False }})
    project: str = field(metadata={'path_param': { 'field_name': 'project', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProjectUsernameProjectBuildNumArtifactsRequest:
    path_params: GetProjectUsernameProjectBuildNumArtifactsPathParams = field()
    

@dataclass
class GetProjectUsernameProjectBuildNumArtifactsResponse:
    content_type: str = field()
    status_code: int = field()
    artifacts: Optional[List[shared.Artifact]] = field(default=None)
    
