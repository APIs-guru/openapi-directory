from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CancelJobXAmzTargetEnum(str, Enum):
    AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_CANCEL_JOB = "AWSIESnowballJobManagementService.CancelJob"


@dataclass
class CancelJobHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CancelJobXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CancelJobRequest:
    headers: CancelJobHeaders = field(default=None)
    request: shared.CancelJobRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CancelJobResponse:
    cancel_job_result: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    invalid_job_state_exception: Optional[Any] = field(default=None)
    invalid_resource_exception: Optional[Any] = field(default=None)
    kms_request_failed_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
