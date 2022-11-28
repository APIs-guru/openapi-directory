from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class ReposUpdateInvitationPathParams:
    invitation_id: int = field(metadata={'path_param': { 'field_name': 'invitation_id', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    repo: str = field(metadata={'path_param': { 'field_name': 'repo', 'style': 'simple', 'explode': False }})
    
class ReposUpdateInvitationRequestBodyPermissionsEnum(str, Enum):
    READ = "read"
    WRITE = "write"
    MAINTAIN = "maintain"
    TRIAGE = "triage"
    ADMIN = "admin"


@dataclass_json
@dataclass
class ReposUpdateInvitationRequestBody:
    permissions: Optional[ReposUpdateInvitationRequestBodyPermissionsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('permissions') }})
    

@dataclass
class ReposUpdateInvitationRequest:
    path_params: ReposUpdateInvitationPathParams = field()
    request: Optional[ReposUpdateInvitationRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReposUpdateInvitationResponse:
    content_type: str = field()
    status_code: int = field()
    repository_invitation: Optional[shared.RepositoryInvitation] = field(default=None)
    
