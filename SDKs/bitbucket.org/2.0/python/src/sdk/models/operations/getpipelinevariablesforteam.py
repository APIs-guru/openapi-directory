from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPipelineVariablesForTeamPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPipelineVariablesForTeamQueryParams:
    workspace: str = field(metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPipelineVariablesForTeamRequest:
    path_params: GetPipelineVariablesForTeamPathParams = field()
    query_params: GetPipelineVariablesForTeamQueryParams = field()
    

@dataclass
class GetPipelineVariablesForTeamResponse:
    content_type: str = field()
    status_code: int = field()
    paginated_pipeline_variables: Optional[shared.PaginatedPipelineVariables] = field(default=None)
    
