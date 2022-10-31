from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SendTaskSuccessXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_SEND_TASK_SUCCESS = "AWSStepFunctions.SendTaskSuccess"


@dataclass
class SendTaskSuccessHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: SendTaskSuccessXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendTaskSuccessRequest:
    headers: SendTaskSuccessHeaders = field(default=None)
    request: shared.SendTaskSuccessInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendTaskSuccessResponse:
    content_type: str = field(default=None)
    invalid_output: Optional[Any] = field(default=None)
    invalid_token: Optional[Any] = field(default=None)
    send_task_success_output: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    task_does_not_exist: Optional[Any] = field(default=None)
    task_timed_out: Optional[Any] = field(default=None)
    
