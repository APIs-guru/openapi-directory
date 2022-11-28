from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetWorkflowExecutionHistoryQueryParams:
    maximum_page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maximumPageSize', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextPageToken', 'style': 'form', 'explode': True }})
    
class GetWorkflowExecutionHistoryXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_GET_WORKFLOW_EXECUTION_HISTORY = "SimpleWorkflowService.GetWorkflowExecutionHistory"


@dataclass
class GetWorkflowExecutionHistoryHeaders:
    x_amz_target: GetWorkflowExecutionHistoryXAmzTargetEnum = field(metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkflowExecutionHistoryRequest:
    headers: GetWorkflowExecutionHistoryHeaders = field()
    query_params: GetWorkflowExecutionHistoryQueryParams = field()
    request: shared.GetWorkflowExecutionHistoryInput = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetWorkflowExecutionHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    history: Optional[shared.History] = field(default=None)
    operation_not_permitted_fault: Optional[Any] = field(default=None)
    unknown_resource_fault: Optional[Any] = field(default=None)
    
