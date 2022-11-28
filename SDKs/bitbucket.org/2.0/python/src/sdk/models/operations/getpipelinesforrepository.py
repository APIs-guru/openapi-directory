from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPipelinesForRepositoryPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelinesForRepositoryRequest:
    path_params: GetPipelinesForRepositoryPathParams = field()
    

@dataclass
class GetPipelinesForRepositoryResponse:
    content_type: str = field()
    status_code: int = field()
    paginated_pipelines: Optional[shared.PaginatedPipelines] = field(default=None)
    
