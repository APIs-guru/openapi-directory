from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposDeclineInvitationPathParams:
    invitation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposDeclineInvitationRequest:
    path_params: ReposDeclineInvitationPathParams = field(default=None)
    

@dataclass
class ReposDeclineInvitationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
