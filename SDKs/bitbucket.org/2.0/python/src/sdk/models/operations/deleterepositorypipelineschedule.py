from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteRepositoryPipelineSchedulePathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    schedule_uuid: str = field(metadata={'path_param': { 'field_name': 'schedule_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteRepositoryPipelineScheduleRequest:
    path_params: DeleteRepositoryPipelineSchedulePathParams = field()
    

@dataclass
class DeleteRepositoryPipelineScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    
