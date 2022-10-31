from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DeclineHandshakeXAmzTargetEnum(str, Enum):
    AWS_ORGANIZATIONS_V20161128_DECLINE_HANDSHAKE = "AWSOrganizationsV20161128.DeclineHandshake"


@dataclass
class DeclineHandshakeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DeclineHandshakeXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeclineHandshakeRequest:
    headers: DeclineHandshakeHeaders = field(default=None)
    request: shared.DeclineHandshakeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DeclineHandshakeResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    concurrent_modification_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    decline_handshake_response: Optional[shared.DeclineHandshakeResponse] = field(default=None)
    handshake_already_in_state_exception: Optional[Any] = field(default=None)
    handshake_not_found_exception: Optional[Any] = field(default=None)
    invalid_handshake_transition_exception: Optional[Any] = field(default=None)
    invalid_input_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
