from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class UpdateShareInvitationPathParams:
    share_invitation_id: str = field(default=None, metadata={'path_param': { 'field_name': 'ShareInvitationId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateShareInvitationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    
class UpdateShareInvitationRequestBodyShareInvitationActionEnum(str, Enum):
    ACCEPT = "ACCEPT"
    REJECT = "REJECT"


@dataclass_json
@dataclass
class UpdateShareInvitationRequestBody:
    share_invitation_action: UpdateShareInvitationRequestBodyShareInvitationActionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShareInvitationAction' }})
    

@dataclass
class UpdateShareInvitationRequest:
    path_params: UpdateShareInvitationPathParams = field(default=None)
    headers: UpdateShareInvitationHeaders = field(default=None)
    request: UpdateShareInvitationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateShareInvitationResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    update_share_invitation_output: Optional[shared.UpdateShareInvitationOutput] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
