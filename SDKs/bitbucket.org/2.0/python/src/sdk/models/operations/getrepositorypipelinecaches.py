from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoryPipelineCachesPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoryPipelineCachesRequest:
    path_params: GetRepositoryPipelineCachesPathParams = field(default=None)
    

@dataclass
class GetRepositoryPipelineCachesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_pipeline_caches: Optional[shared.PaginatedPipelineCaches] = field(default=None)
    
