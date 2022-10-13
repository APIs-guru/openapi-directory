from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListWorkflowTypesQueryParams:
    maximum_page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maximumPageSize', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextPageToken', 'style': 'form', 'explode': True }})
    
class ListWorkflowTypesXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_LIST_WORKFLOW_TYPES = "SimpleWorkflowService.ListWorkflowTypes"


@dataclass
class ListWorkflowTypesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListWorkflowTypesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListWorkflowTypesRequest:
    query_params: ListWorkflowTypesQueryParams = field(default=None)
    headers: ListWorkflowTypesHeaders = field(default=None)
    request: shared.ListWorkflowTypesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListWorkflowTypesResponse:
    content_type: str = field(default=None)
    operation_not_permitted_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unknown_resource_fault: Optional[Any] = field(default=None)
    workflow_type_infos: Optional[shared.WorkflowTypeInfos] = field(default=None)
    
