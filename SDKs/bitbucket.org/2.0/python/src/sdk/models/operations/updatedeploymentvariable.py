from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class UpdateDeploymentVariablePathParams:
    environment_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'environment_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    variable_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'variable_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateDeploymentVariableRequest:
    path_params: UpdateDeploymentVariablePathParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateDeploymentVariableResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    deployment_variable: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
