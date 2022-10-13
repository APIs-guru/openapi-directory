from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReposUpdateInvitationPathParams:
    invitation_id: int = field(default=None, metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(default=None, metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposUpdateInvitationRequestBodyPermissionsEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    MAINTAIN = "maintain"
    TRIAGE = "triage"
    ADMIN = "admin"


@dataclass_json
@dataclass
class ReposUpdateInvitationRequestBody:
    permissions: Optional[ReposUpdateInvitationRequestBodyPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'permissions' }})
    

@dataclass
class ReposUpdateInvitationRequest:
    path_params: ReposUpdateInvitationPathParams = field(default=None)
    request: Optional[ReposUpdateInvitationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdateInvitationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    repository_invitation: Optional[shared.RepositoryInvitation] = field(default=None)
    
