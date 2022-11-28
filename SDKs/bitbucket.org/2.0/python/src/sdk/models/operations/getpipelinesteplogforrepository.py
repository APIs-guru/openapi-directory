from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetPipelineStepLogForRepositoryPathParams:
    pipeline_uuid: str = field(metadata={'path_param': { 'field_name': 'pipeline_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    step_uuid: str = field(metadata={'path_param': { 'field_name': 'step_uuid', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelineStepLogForRepositoryRequest:
    path_params: GetPipelineStepLogForRepositoryPathParams = field()
    

@dataclass
class GetPipelineStepLogForRepositoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
