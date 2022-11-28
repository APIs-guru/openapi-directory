from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoryPipelineCachesPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoryPipelineCachesRequest:
    path_params: GetRepositoryPipelineCachesPathParams = field()
    

@dataclass
class GetRepositoryPipelineCachesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_pipeline_caches: Optional[shared.PaginatedPipelineCaches] = field(default=None)
    
