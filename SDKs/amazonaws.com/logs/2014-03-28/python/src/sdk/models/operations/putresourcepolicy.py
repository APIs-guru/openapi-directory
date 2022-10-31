from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class PutResourcePolicyXAmzTargetEnum(str, Enum):
    LOGS_20140328_PUT_RESOURCE_POLICY = "Logs_20140328.PutResourcePolicy"


@dataclass
class PutResourcePolicyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: PutResourcePolicyXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutResourcePolicyRequest:
    headers: PutResourcePolicyHeaders = field(default=None)
    request: shared.PutResourcePolicyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutResourcePolicyResponse:
    content_type: str = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    limit_exceeded_exception: Optional[Any] = field(default=None)
    put_resource_policy_response: Optional[shared.PutResourcePolicyResponse] = field(default=None)
    service_unavailable_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
