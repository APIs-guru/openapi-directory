from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class AssociateQualificationWithWorkerXAmzTargetEnum(str, Enum):
    M_TURK_REQUESTER_SERVICE_V20170117_ASSOCIATE_QUALIFICATION_WITH_WORKER = "MTurkRequesterServiceV20170117.AssociateQualificationWithWorker"


@dataclass
class AssociateQualificationWithWorkerHeaders:
    x_amz_target: AssociateQualificationWithWorkerXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class AssociateQualificationWithWorkerRequest:
    headers: AssociateQualificationWithWorkerHeaders = field()
    request: shared.AssociateQualificationWithWorkerRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AssociateQualificationWithWorkerResponse:
    content_type: str = field()
    status_code: int = field()
    associate_qualification_with_worker_response: Optional[dict[str, Any]] = field(default=None)
    request_error: Optional[Any] = field(default=None)
    service_fault: Optional[Any] = field(default=None)
    
