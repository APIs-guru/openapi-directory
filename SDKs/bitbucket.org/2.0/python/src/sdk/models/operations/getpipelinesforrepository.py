from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPipelinesForRepositoryPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelinesForRepositoryRequest:
    path_params: GetPipelinesForRepositoryPathParams = field(default=None)
    

@dataclass
class GetPipelinesForRepositoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    paginated_pipelines: Optional[shared.PaginatedPipelines] = field(default=None)
    
