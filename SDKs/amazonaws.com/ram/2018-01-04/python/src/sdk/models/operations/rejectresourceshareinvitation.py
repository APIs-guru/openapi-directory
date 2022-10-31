from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class RejectResourceShareInvitationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class RejectResourceShareInvitationRequestBody:
    client_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientToken' }})
    resource_share_invitation_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceShareInvitationArn' }})
    

@dataclass
class RejectResourceShareInvitationRequest:
    headers: RejectResourceShareInvitationHeaders = field(default=None)
    request: RejectResourceShareInvitationRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RejectResourceShareInvitationResponse:
    content_type: str = field(default=None)
    idempotent_parameter_mismatch_exception: Optional[Any] = field(default=None)
    invalid_client_token_exception: Optional[Any] = field(default=None)
    malformed_arn_exception: Optional[Any] = field(default=None)
    operation_not_permitted_exception: Optional[Any] = field(default=None)
    reject_resource_share_invitation_response: Optional[shared.RejectResourceShareInvitationResponse] = field(default=None)
    resource_share_invitation_already_accepted_exception: Optional[Any] = field(default=None)
    resource_share_invitation_already_rejected_exception: Optional[Any] = field(default=None)
    resource_share_invitation_arn_not_found_exception: Optional[Any] = field(default=None)
    resource_share_invitation_expired_exception: Optional[Any] = field(default=None)
    server_internal_exception: Optional[Any] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
