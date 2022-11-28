from dataclasses import dataclass, field



@dataclass
class ReposDeleteInvitationPathParams:
    invitation_id: int = field(metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDeleteInvitationRequest:
    path_params: ReposDeleteInvitationPathParams = field()
    

@dataclass
class ReposDeleteInvitationResponse:
    content_type: str = field()
    status_code: int = field()
    
