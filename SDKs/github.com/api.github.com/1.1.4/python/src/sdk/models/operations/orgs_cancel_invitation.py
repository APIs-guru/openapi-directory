from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsCancelInvitationPathParams:
    invitation_id: int = field(metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsCancelInvitationRequest:
    path_params: OrgsCancelInvitationPathParams = field()
    

@dataclass
class OrgsCancelInvitationResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
