from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class CreateRepositoryPipelineSchedulePathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateRepositoryPipelineScheduleRequest:
    path_params: CreateRepositoryPipelineSchedulePathParams = field()
    request: dict[str, Any] = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateRepositoryPipelineScheduleResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[dict[str, Any]] = field(default=None)
    pipeline_schedule: Optional[dict[str, Any]] = field(default=None)
    
