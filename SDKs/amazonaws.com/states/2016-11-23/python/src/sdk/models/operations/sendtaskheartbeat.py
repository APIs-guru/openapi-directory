from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class SendTaskHeartbeatXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_SEND_TASK_HEARTBEAT = "AWSStepFunctions.SendTaskHeartbeat"


@dataclass
class SendTaskHeartbeatHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: SendTaskHeartbeatXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class SendTaskHeartbeatRequest:
    headers: SendTaskHeartbeatHeaders = field(default=None)
    request: shared.SendTaskHeartbeatInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendTaskHeartbeatResponse:
    content_type: str = field(default=None)
    invalid_token: Optional[Any] = field(default=None)
    send_task_heartbeat_output: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    task_does_not_exist: Optional[Any] = field(default=None)
    task_timed_out: Optional[Any] = field(default=None)
    
