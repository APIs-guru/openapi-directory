from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class SendTaskHeartbeatXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_SEND_TASK_HEARTBEAT = "AWSStepFunctions.SendTaskHeartbeat"


@dataclass
class SendTaskHeartbeatHeaders:
    x_amz_target: SendTaskHeartbeatXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendTaskHeartbeatRequest:
    headers: SendTaskHeartbeatHeaders = field()
    request: shared.SendTaskHeartbeatInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendTaskHeartbeatResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_token: Optional[Any] = field(default=None)
    send_task_heartbeat_output: Optional[dict[str, Any]] = field(default=None)
    task_does_not_exist: Optional[Any] = field(default=None)
    task_timed_out: Optional[Any] = field(default=None)
    
