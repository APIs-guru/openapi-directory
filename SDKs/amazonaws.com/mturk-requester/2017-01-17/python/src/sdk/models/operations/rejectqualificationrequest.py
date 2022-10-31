from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RejectQualificationRequestXAmzTargetEnum(str, Enum):
    M_TURK_REQUESTER_SERVICE_V20170117_REJECT_QUALIFICATION_REQUEST = "MTurkRequesterServiceV20170117.RejectQualificationRequest"


@dataclass
class RejectQualificationRequestHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: RejectQualificationRequestXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class RejectQualificationRequestRequest:
    headers: RejectQualificationRequestHeaders = field(default=None)
    request: shared.RejectQualificationRequestRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RejectQualificationRequestResponse:
    content_type: str = field(default=None)
    reject_qualification_request_response: Optional[dict[str, Any]] = field(default=None)
    request_error: Optional[Any] = field(default=None)
    service_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
