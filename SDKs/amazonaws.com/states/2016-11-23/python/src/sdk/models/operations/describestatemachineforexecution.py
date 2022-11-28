from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class DescribeStateMachineForExecutionXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_DESCRIBE_STATE_MACHINE_FOR_EXECUTION = "AWSStepFunctions.DescribeStateMachineForExecution"


@dataclass
class DescribeStateMachineForExecutionHeaders:
    x_amz_target: DescribeStateMachineForExecutionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeStateMachineForExecutionRequest:
    headers: DescribeStateMachineForExecutionHeaders = field()
    request: shared.DescribeStateMachineForExecutionInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeStateMachineForExecutionResponse:
    content_type: str = field()
    status_code: int = field()
    describe_state_machine_for_execution_output: Optional[shared.DescribeStateMachineForExecutionOutput] = field(default=None)
    execution_does_not_exist: Optional[Any] = field(default=None)
    invalid_arn: Optional[Any] = field(default=None)
    
