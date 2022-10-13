from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsCancelInvitationPathParams:
    invitation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsCancelInvitationRequest:
    path_params: OrgsCancelInvitationPathParams = field(default=None)
    

@dataclass
class OrgsCancelInvitationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
