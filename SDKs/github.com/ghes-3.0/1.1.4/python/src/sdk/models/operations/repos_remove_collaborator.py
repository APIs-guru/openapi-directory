from dataclasses import dataclass, field



@dataclass
class ReposRemoveCollaboratorPathParams:
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposRemoveCollaboratorRequest:
    path_params: ReposRemoveCollaboratorPathParams = field(default=None)
    

@dataclass
class ReposRemoveCollaboratorResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
