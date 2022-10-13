from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteEnvironmentForRepositoryPathParams:
    environment_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'environment_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEnvironmentForRepositoryRequest:
    path_params: DeleteEnvironmentForRepositoryPathParams = field(default=None)
    

@dataclass
class DeleteEnvironmentForRepositoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
