from dataclasses import dataclass, field



@dataclass
class ReposRemoveCollaboratorPathParams:
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposRemoveCollaboratorRequest:
    path_params: ReposRemoveCollaboratorPathParams = field()
    

@dataclass
class ReposRemoveCollaboratorResponse:
    content_type: str = field()
    status_code: int = field()
    
