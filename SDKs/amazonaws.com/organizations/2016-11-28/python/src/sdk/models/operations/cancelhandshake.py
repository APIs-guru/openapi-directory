from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CancelHandshakeXAmzTargetEnum(str, Enum):
    AWS_ORGANIZATIONS_V20161128_CANCEL_HANDSHAKE = "AWSOrganizationsV20161128.CancelHandshake"


@dataclass
class CancelHandshakeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CancelHandshakeXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CancelHandshakeRequest:
    headers: CancelHandshakeHeaders = field(default=None)
    request: shared.CancelHandshakeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CancelHandshakeResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    cancel_handshake_response: Optional[shared.CancelHandshakeResponse] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    handshake_already_in_state_exception: Optional[Any] = field(default=None)
    handshake_not_found_exception: Optional[Any] = field(default=None)
    invalid_handshake_transition_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
