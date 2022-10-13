from dataclasses import dataclass, field



@dataclass
class ActionsReRunWorkflowPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(default=None, metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsReRunWorkflowRequest:
    path_params: ActionsReRunWorkflowPathParams = field(default=None)
    

@dataclass
class ActionsReRunWorkflowResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
