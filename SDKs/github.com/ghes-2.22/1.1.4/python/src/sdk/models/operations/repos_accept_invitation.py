from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposAcceptInvitationPathParams:
    invitation_id: int = field(metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposAcceptInvitationRequest:
    path_params: ReposAcceptInvitationPathParams = field()
    

@dataclass
class ReposAcceptInvitationResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
