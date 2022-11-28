from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CreatePipelineForRepositoryPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreatePipelineForRepositoryRequest:
    path_params: CreatePipelineForRepositoryPathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreatePipelineForRepositoryResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline: Optional[dict[str, Any]] = field(default=None)
    
