from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared

class CountPendingDecisionTasksXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_COUNT_PENDING_DECISION_TASKS = "SimpleWorkflowService.CountPendingDecisionTasks"


@dataclass
class CountPendingDecisionTasksHeaders:
    x_amz_target: CountPendingDecisionTasksXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class CountPendingDecisionTasksRequest:
    headers: CountPendingDecisionTasksHeaders = field()
    request: shared.CountPendingDecisionTasksInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CountPendingDecisionTasksResponse:
    content_type: str = field()
    status_code: int = field()
    operation_not_permitted_fault: Optional[Any] = field(default=None)
    pending_task_count: Optional[shared.PendingTaskCount] = field(default=None)
    unknown_resource_fault: Optional[Any] = field(default=None)
    
