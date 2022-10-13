from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class StartWorkflowExecutionXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_START_WORKFLOW_EXECUTION = "SimpleWorkflowService.StartWorkflowExecution"


@dataclass
class StartWorkflowExecutionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: StartWorkflowExecutionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class StartWorkflowExecutionRequest:
    headers: StartWorkflowExecutionHeaders = field(default=None)
    request: shared.StartWorkflowExecutionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartWorkflowExecutionResponse:
    content_type: str = field(default=None)
    default_undefined_fault: Optional[Any] = field(default=None)
    limit_exceeded_fault: Optional[Any] = field(default=None)
    operation_not_permitted_fault: Optional[Any] = field(default=None)
    run: Optional[shared.Run] = field(default=None)
    status_code: int = field(default=None)
    type_deprecated_fault: Optional[Any] = field(default=None)
    unknown_resource_fault: Optional[Any] = field(default=None)
    workflow_execution_already_started_fault: Optional[Any] = field(default=None)
    
