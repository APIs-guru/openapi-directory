from dataclasses import dataclass, field



@dataclass
class ActionsReRunWorkflowPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    run_id: int = field(metadata={'path_param': { 'field_name': 'run_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ActionsReRunWorkflowRequest:
    path_params: ActionsReRunWorkflowPathParams = field()
    

@dataclass
class ActionsReRunWorkflowResponse:
    content_type: str = field()
    status_code: int = field()
    
