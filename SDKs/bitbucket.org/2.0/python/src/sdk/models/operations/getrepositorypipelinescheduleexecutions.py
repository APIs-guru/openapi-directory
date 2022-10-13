from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetRepositoryPipelineScheduleExecutionsPathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    schedule_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'schedule_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoryPipelineScheduleExecutionsRequest:
    path_params: GetRepositoryPipelineScheduleExecutionsPathParams = field(default=None)
    

@dataclass
class GetRepositoryPipelineScheduleExecutionsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    paginated_pipeline_schedule_executions: Optional[shared.PaginatedPipelineScheduleExecutions] = field(default=None)
    
