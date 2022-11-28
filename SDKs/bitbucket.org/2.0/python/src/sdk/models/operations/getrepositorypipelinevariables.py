from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRepositoryPipelineVariablesPathParams:
    repo_slug: str = field(metadata={'path_param': { 'field_name': 'repo_slug', 'style': 'simple', 'explode': False }})
    workspace: str = field(metadata={'path_param': { 'field_name': 'workspace', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRepositoryPipelineVariablesRequest:
    path_params: GetRepositoryPipelineVariablesPathParams = field()
    

@dataclass
class GetRepositoryPipelineVariablesResponse:
    content_type: str = field()
    status_code: int = field()
    paginated_pipeline_variables: Optional[shared.PaginatedPipelineVariables] = field(default=None)
    
