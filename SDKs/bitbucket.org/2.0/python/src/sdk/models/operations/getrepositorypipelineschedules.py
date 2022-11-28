from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoryPipelineSchedulesPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoryPipelineSchedulesRequest:
    path_params: GetRepositoryPipelineSchedulesPathParams = field()
    

@dataclass
class GetRepositoryPipelineSchedulesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_pipeline_schedules: Optional[shared.PaginatedPipelineSchedules] = field(default=None)
    
