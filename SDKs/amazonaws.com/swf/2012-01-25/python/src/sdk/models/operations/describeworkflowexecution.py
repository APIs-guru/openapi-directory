from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribeWorkflowExecutionXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_DESCRIBE_WORKFLOW_EXECUTION = "SimpleWorkflowService.DescribeWorkflowExecution"


@dataclass
class DescribeWorkflowExecutionHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeWorkflowExecutionXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeWorkflowExecutionRequest:
    headers: DescribeWorkflowExecutionHeaders = field(default=None)
    request: shared.DescribeWorkflowExecutionInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeWorkflowExecutionResponse:
    content_type: str = field(default=None)
    operation_not_permitted_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unknown_resource_fault: Optional[Any] = field(default=None)
    workflow_execution_detail: Optional[shared.WorkflowExecutionDetail] = field(default=None)
    
