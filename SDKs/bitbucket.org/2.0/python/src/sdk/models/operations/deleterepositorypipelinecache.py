from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteRepositoryPipelineCachePathParams:
    cache_uuid: str = field(metadata={'path_param': { 'field_name': 'cache_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRepositoryPipelineCacheRequest:
    path_params: DeleteRepositoryPipelineCachePathParams = field()
    

@dataclass
class DeleteRepositoryPipelineCacheResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    
