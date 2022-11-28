from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetEnvironmentForRepositoryPathParams:
    environment_uuid: str = field(metadata={'path_param': { 'field_name': 'environment_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEnvironmentForRepositoryRequest:
    path_params: GetEnvironmentForRepositoryPathParams = field()
    

@dataclass
class GetEnvironmentForRepositoryResponse:
    content_type: str = field()
    status_code: int = field()
    deployment_environment: Optional[dict[str, Any]] = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
