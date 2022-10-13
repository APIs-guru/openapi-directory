from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class InviteAccountToOrganizationXAmzTargetEnum(str, Enum):
    AWS_ORGANIZATIONS_V20161128_INVITE_ACCOUNT_TO_ORGANIZATION = "AWSOrganizationsV20161128.InviteAccountToOrganization"


@dataclass
class InviteAccountToOrganizationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: InviteAccountToOrganizationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class InviteAccountToOrganizationRequest:
    headers: InviteAccountToOrganizationHeaders = field(default=None)
    request: shared.InviteAccountToOrganizationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class InviteAccountToOrganizationResponse:
    aws_organizations_not_in_use_exception: Optional[Any] = field(default=None)
    access_denied_exception: Optional[Any] = field(default=None)
    account_owner_not_verified_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    constraint_violation_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    duplicate_handshake_exception: Optional[Any] = field(default=None)
    finalizing_organization_exception: Optional[Any] = field(default=None)
    handshake_constraint_violation_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    invite_account_to_organization_response: Optional[shared.InviteAccountToOrganizationResponse] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
