from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ReposAcceptInvitationPathParams:
    invitation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReposAcceptInvitationRequest:
    path_params: ReposAcceptInvitationPathParams = field(default=None)
    

@dataclass
class ReposAcceptInvitationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
