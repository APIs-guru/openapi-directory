from dataclasses import dataclass, field



@dataclass
class ActionsCancelWorkflowRunPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsCancelWorkflowRunRequest:
    path_params: ActionsCancelWorkflowRunPathParams = field()
    

@dataclass
class ActionsCancelWorkflowRunResponse:
    content_type: str = field()
    status_code: int = field()
    
