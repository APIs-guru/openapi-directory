from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDeploymentVariablesPathParams:
    environment_uuid: str = field(metadata={'path_param': { 'field_name': 'environment_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeploymentVariablesRequest:
    path_params: GetDeploymentVariablesPathParams = field()
    

@dataclass
class GetDeploymentVariablesResponse:
    content_type: str = field()
    status_code: int = field()
    paginated_deployment_variable: Optional[shared.PaginatedDeploymentVariable] = field(default=None)
    
