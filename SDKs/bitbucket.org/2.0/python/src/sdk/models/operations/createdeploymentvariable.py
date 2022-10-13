from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreateDeploymentVariablePathParams:
    environment_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'environment_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeploymentVariableQueryParams:
    variable_uuid: str = field(default=None, metadata={'query_param': { 'field_name': 'variable_uuid', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateDeploymentVariableRequest:
    path_params: CreateDeploymentVariablePathParams = field(default=None)
    query_params: CreateDeploymentVariableQueryParams = field(default=None)
    request: dict[str, Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeploymentVariableResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    deployment_variable: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
