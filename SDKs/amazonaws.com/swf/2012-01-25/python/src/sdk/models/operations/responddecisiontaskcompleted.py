from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RespondDecisionTaskCompletedXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_RESPOND_DECISION_TASK_COMPLETED = "SimpleWorkflowService.RespondDecisionTaskCompleted"


@dataclass
class RespondDecisionTaskCompletedHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: RespondDecisionTaskCompletedXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class RespondDecisionTaskCompletedRequest:
    headers: RespondDecisionTaskCompletedHeaders = field(default=None)
    request: shared.RespondDecisionTaskCompletedInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RespondDecisionTaskCompletedResponse:
    content_type: str = field(default=None)
    operation_not_permitted_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unknown_resource_fault: Optional[Any] = field(default=None)
    
