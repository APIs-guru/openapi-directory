from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class GetActivityTaskXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_GET_ACTIVITY_TASK = "AWSStepFunctions.GetActivityTask"


@dataclass
class GetActivityTaskHeaders:
    x_amz_target: GetActivityTaskXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetActivityTaskRequest:
    headers: GetActivityTaskHeaders = field()
    request: shared.GetActivityTaskInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetActivityTaskResponse:
    content_type: str = field()
    status_code: int = field()
    activity_does_not_exist: Optional[Any] = field(default=None)
    activity_worker_limit_exceeded: Optional[Any] = field(default=None)
    get_activity_task_output: Optional[shared.GetActivityTaskOutput] = field(default=None)
    invalid_arn: Optional[Any] = field(default=None)
    
