from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetActivityTaskXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_GET_ACTIVITY_TASK = "AWSStepFunctions.GetActivityTask"


@dataclass
class GetActivityTaskHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetActivityTaskXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetActivityTaskRequest:
    headers: GetActivityTaskHeaders = field(default=None)
    request: shared.GetActivityTaskInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetActivityTaskResponse:
    activity_does_not_exist: Optional[Any] = field(default=None)
    activity_worker_limit_exceeded: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    get_activity_task_output: Optional[shared.GetActivityTaskOutput] = field(default=None)
    invalid_arn: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
