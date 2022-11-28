from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreateDeploymentVariablePathParams:
    environment_uuid: str = field(metadata={'path_param': { 'field_name': 'environment_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateDeploymentVariableQueryParams:
    variable_uuid: str = field(metadata={'query_param': { 'field_name': 'variable_uuid', 'style': 'form', 'explode': True }})
    

@dataclass
class CreateDeploymentVariableRequest:
    path_params: CreateDeploymentVariablePathParams = field()
    query_params: CreateDeploymentVariableQueryParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateDeploymentVariableResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    deployment_variable: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
