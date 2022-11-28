from dataclasses import dataclass, field



@dataclass
class ActionsDeleteWorkflowRunPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsDeleteWorkflowRunRequest:
    path_params: ActionsDeleteWorkflowRunPathParams = field()
    

@dataclass
class ActionsDeleteWorkflowRunResponse:
    content_type: str = field()
    status_code: int = field()
    
