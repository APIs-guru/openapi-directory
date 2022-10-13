from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeploymentForRepositoryPathParams:
    deployment_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'deployment_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeploymentForRepositoryRequest:
    path_params: GetDeploymentForRepositoryPathParams = field(default=None)
    

@dataclass
class GetDeploymentForRepositoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    deployment: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
