from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteEnvironmentForRepositoryPathParams:
    environment_uuid: str = field(metadata={'path_param': { 'field_name': 'environment_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEnvironmentForRepositoryRequest:
    path_params: DeleteEnvironmentForRepositoryPathParams = field()
    

@dataclass
class DeleteEnvironmentForRepositoryResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    
