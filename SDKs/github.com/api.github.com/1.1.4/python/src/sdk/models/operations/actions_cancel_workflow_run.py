from dataclasses import dataclass, field



@dataclass
class ActionsCancelWorkflowRunPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsCancelWorkflowRunRequest:
    path_params: ActionsCancelWorkflowRunPathParams = field(default=None)
    

@dataclass
class ActionsCancelWorkflowRunResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
