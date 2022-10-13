from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RejectAssignmentXAmzTargetEnum(str, Enum):
    M_TURK_REQUESTER_SERVICE_V20170117_REJECT_ASSIGNMENT = "MTurkRequesterServiceV20170117.RejectAssignment"


@dataclass
class RejectAssignmentHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: RejectAssignmentXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class RejectAssignmentRequest:
    headers: RejectAssignmentHeaders = field(default=None)
    request: shared.RejectAssignmentRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RejectAssignmentResponse:
    content_type: str = field(default=None)
    reject_assignment_response: Optional[dict[str, Any]] = field(default=None)
    request_error: Optional[Any] = field(default=None)
    service_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
