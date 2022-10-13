from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPipelineStepsForRepositoryPathParams:
    pipeline_uuid: str = field(default=None, metadata={'path_param': { 'field_name': 'pipeline_uuid', 'style': 'simple', 'explode': False }})
    repo_slug: str = field(default=None, metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelineStepsForRepositoryRequest:
    path_params: GetPipelineStepsForRepositoryPathParams = field(default=None)
    

@dataclass
class GetPipelineStepsForRepositoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    paginated_pipeline_steps: Optional[shared.PaginatedPipelineSteps] = field(default=None)
    
