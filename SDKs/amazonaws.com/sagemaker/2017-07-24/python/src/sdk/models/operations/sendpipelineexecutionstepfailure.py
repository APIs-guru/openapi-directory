from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class SendPipelineExecutionStepFailureXAmzTargetEnum(str, Enum):
    SAGE_MAKER_SEND_PIPELINE_EXECUTION_STEP_FAILURE = "SageMaker.SendPipelineExecutionStepFailure"


@dataclass
class SendPipelineExecutionStepFailureHeaders:
    x_amz_target: SendPipelineExecutionStepFailureXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class SendPipelineExecutionStepFailureRequest:
    headers: SendPipelineExecutionStepFailureHeaders = field()
    request: shared.SendPipelineExecutionStepFailureRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SendPipelineExecutionStepFailureResponse:
    content_type: str = field()
    status_code: int = field()
    resource_limit_exceeded: Optional[Any] = field(default=None)
    resource_not_found: Optional[Any] = field(default=None)
    send_pipeline_execution_step_failure_response: Optional[shared.SendPipelineExecutionStepFailureResponse] = field(default=None)
    
