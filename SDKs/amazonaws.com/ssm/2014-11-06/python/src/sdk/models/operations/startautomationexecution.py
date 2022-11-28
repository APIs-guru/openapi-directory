from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class StartAutomationExecutionXAmzTargetEnum(str, Enum):
    AMAZON_SSM_START_AUTOMATION_EXECUTION = "AmazonSSM.StartAutomationExecution"


@dataclass
class StartAutomationExecutionHeaders:
    x_amz_target: StartAutomationExecutionXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartAutomationExecutionRequest:
    headers: StartAutomationExecutionHeaders = field()
    request: shared.StartAutomationExecutionRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartAutomationExecutionResponse:
    content_type: str = field()
    status_code: int = field()
    automation_definition_not_found_exception: Optional[Any] = field(default=None)
    automation_definition_version_not_found_exception: Optional[Any] = field(default=None)
    automation_execution_limit_exceeded_exception: Optional[Any] = field(default=None)
    idempotent_parameter_mismatch: Optional[Any] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_automation_execution_parameters_exception: Optional[Any] = field(default=None)
    invalid_target: Optional[Any] = field(default=None)
    start_automation_execution_result: Optional[shared.StartAutomationExecutionResult] = field(default=None)
    
