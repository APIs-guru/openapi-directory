from dataclasses import dataclass, field



@dataclass
class ReposCheckCollaboratorPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposCheckCollaboratorRequest:
    path_params: ReposCheckCollaboratorPathParams = field()
    

@dataclass
class ReposCheckCollaboratorResponse:
    content_type: str = field()
    status_code: int = field()
    
