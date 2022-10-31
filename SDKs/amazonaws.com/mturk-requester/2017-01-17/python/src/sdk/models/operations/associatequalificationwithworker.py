from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class AssociateQualificationWithWorkerXAmzTargetEnum(str, Enum):
    M_TURK_REQUESTER_SERVICE_V20170117_ASSOCIATE_QUALIFICATION_WITH_WORKER = "MTurkRequesterServiceV20170117.AssociateQualificationWithWorker"


@dataclass
class AssociateQualificationWithWorkerHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: AssociateQualificationWithWorkerXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateQualificationWithWorkerRequest:
    headers: AssociateQualificationWithWorkerHeaders = field(default=None)
    request: shared.AssociateQualificationWithWorkerRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateQualificationWithWorkerResponse:
    associate_qualification_with_worker_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    request_error: Optional[Any] = field(default=None)
    service_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
