from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RecordActivityTaskHeartbeatXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_RECORD_ACTIVITY_TASK_HEARTBEAT = "SimpleWorkflowService.RecordActivityTaskHeartbeat"


@dataclass
class RecordActivityTaskHeartbeatHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: RecordActivityTaskHeartbeatXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class RecordActivityTaskHeartbeatRequest:
    headers: RecordActivityTaskHeartbeatHeaders = field(default=None)
    request: shared.RecordActivityTaskHeartbeatInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RecordActivityTaskHeartbeatResponse:
    activity_task_status: Optional[shared.ActivityTaskStatus] = field(default=None)
    content_type: str = field(default=None)
    operation_not_permitted_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unknown_resource_fault: Optional[Any] = field(default=None)
    
