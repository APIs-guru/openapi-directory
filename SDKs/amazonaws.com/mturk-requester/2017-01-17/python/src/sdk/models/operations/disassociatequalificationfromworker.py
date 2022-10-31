from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DisassociateQualificationFromWorkerXAmzTargetEnum(str, Enum):
    M_TURK_REQUESTER_SERVICE_V20170117_DISASSOCIATE_QUALIFICATION_FROM_WORKER = "MTurkRequesterServiceV20170117.DisassociateQualificationFromWorker"


@dataclass
class DisassociateQualificationFromWorkerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DisassociateQualificationFromWorkerXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DisassociateQualificationFromWorkerRequest:
    headers: DisassociateQualificationFromWorkerHeaders = field(default=None)
    request: shared.DisassociateQualificationFromWorkerRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisassociateQualificationFromWorkerResponse:
    content_type: str = field(default=None)
    disassociate_qualification_from_worker_response: Optional[dict[str, Any]] = field(default=None)
    request_error: Optional[Any] = field(default=None)
    service_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
