from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListActivityTypesQueryParams:
    maximum_page_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maximumPageSize', 'style': 'form', 'explode': True }})
    next_page_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextPageToken', 'style': 'form', 'explode': True }})
    
class ListActivityTypesXAmzTargetEnum(str, Enum):
    SIMPLE_WORKFLOW_SERVICE_LIST_ACTIVITY_TYPES = "SimpleWorkflowService.ListActivityTypes"


@dataclass
class ListActivityTypesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListActivityTypesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListActivityTypesRequest:
    query_params: ListActivityTypesQueryParams = field(default=None)
    headers: ListActivityTypesHeaders = field(default=None)
    request: shared.ListActivityTypesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListActivityTypesResponse:
    activity_type_infos: Optional[shared.ActivityTypeInfos] = field(default=None)
    content_type: str = field(default=None)
    operation_not_permitted_fault: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unknown_resource_fault: Optional[Any] = field(default=None)
    
