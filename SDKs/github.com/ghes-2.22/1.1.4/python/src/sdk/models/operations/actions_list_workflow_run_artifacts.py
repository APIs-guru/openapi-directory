from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActionsListWorkflowRunArtifactsPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsListWorkflowRunArtifactsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActionsListWorkflowRunArtifactsRequest:
    path_params: ActionsListWorkflowRunArtifactsPathParams = field(default=None)
    query_params: ActionsListWorkflowRunArtifactsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActionsListWorkflowRunArtifacts200ApplicationJSON:
    artifacts: List[shared.Artifact] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artifacts' }})
    total_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total_count' }})
    

@dataclass
class ActionsListWorkflowRunArtifactsResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    actions_list_workflow_run_artifacts_200_application_json_object: Optional[ActionsListWorkflowRunArtifacts200ApplicationJSON] = field(default=None)
    
