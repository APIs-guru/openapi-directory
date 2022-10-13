from dataclasses import dataclass, field



@dataclass
class ReposDeleteInvitationPathParams:
    invitation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDeleteInvitationRequest:
    path_params: ReposDeleteInvitationPathParams = field(default=None)
    

@dataclass
class ReposDeleteInvitationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
