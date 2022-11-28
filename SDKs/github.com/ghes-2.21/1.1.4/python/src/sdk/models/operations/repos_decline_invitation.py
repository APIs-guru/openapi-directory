from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposDeclineInvitationPathParams:
    invitation_id: int = field(metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDeclineInvitationRequest:
    path_params: ReposDeclineInvitationPathParams = field()
    

@dataclass
class ReposDeclineInvitationResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
