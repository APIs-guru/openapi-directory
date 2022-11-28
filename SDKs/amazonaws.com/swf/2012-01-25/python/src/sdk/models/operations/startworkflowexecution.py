from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class StartWorkflowExecutionXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_START_WORKFLOW_EXECUTION = "SimpleWorkflowService.StartWorkflowExecution"


@dataclass
class StartWorkflowExecutionHeaders:
    x_amz_target: StartWorkflowExecutionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartWorkflowExecutionRequest:
    headers: StartWorkflowExecutionHeaders = field()
    request: shared.StartWorkflowExecutionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartWorkflowExecutionResponse:
    content_type: str = field()
    status_code: int = field()
    default_undefined_fault: Optional[Any] = field(default=None)
    limit_exceeded_fault: Optional[Any] = field(default=None)
    operation_not_permitted_fault: Optional[Any] = field(default=None)
    run: Optional[shared.Run] = field(default=None)
    type_deprecated_fault: Optional[Any] = field(default=None)
    unknown_resource_fault: Optional[Any] = field(default=None)
    workflow_execution_already_started_fault: Optional[Any] = field(default=None)
    
