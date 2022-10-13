from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetRepositoryPipelineSchedulePathParams:
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    schedule_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'schedule_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoryPipelineScheduleRequest:
    path_params: GetRepositoryPipelineSchedulePathParams = field(default=None)
    

@dataclass
class GetRepositoryPipelineScheduleResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_schedule: Optional[dict[str, Any]] = field(default=None)
    
