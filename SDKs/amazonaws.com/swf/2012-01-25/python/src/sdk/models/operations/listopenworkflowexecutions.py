from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListOpenWorkflowExecutionsQueryParams:
    maximum_page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maximumPageSize', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextPageToken', 'style': 'form', 'explode': True }})
    
class ListOpenWorkflowExecutionsXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_LIST_OPEN_WORKFLOW_EXECUTIONS = "SimpleWorkflowService.ListOpenWorkflowExecutions"


@dataclass
class ListOpenWorkflowExecutionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListOpenWorkflowExecutionsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListOpenWorkflowExecutionsRequest:
    query_params: ListOpenWorkflowExecutionsQueryParams = field(default=None)
    headers: ListOpenWorkflowExecutionsHeaders = field(default=None)
    request: shared.ListOpenWorkflowExecutionsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListOpenWorkflowExecutionsResponse:
    content_type: str = field(default=None)
    operation_not_permitted_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unknown_resource_fault: Optional[Any] = field(default=None)
    workflow_execution_infos: Optional[shared.WorkflowExecutionInfos] = field(default=None)
    
