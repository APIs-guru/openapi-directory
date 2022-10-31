from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetJobUnlockCodeXAmzTargetEnum(str, Enum):
    AWSIE_SNOWBALL_JOB_MANAGEMENT_SERVICE_GET_JOB_UNLOCK_CODE = "AWSIESnowballJobManagementService.GetJobUnlockCode"


@dataclass
class GetJobUnlockCodeHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetJobUnlockCodeXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJobUnlockCodeRequest:
    headers: GetJobUnlockCodeHeaders = field(default=None)
    request: shared.GetJobUnlockCodeRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetJobUnlockCodeResponse:
    content_type: str = field(default=None)
    get_job_unlock_code_result: Optional[shared.GetJobUnlockCodeResult] = field(default=None)
    invalid_job_state_exception: Optional[Any] = field(default=None)
    invalid_resource_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
