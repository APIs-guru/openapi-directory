from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListStudioLifecycleConfigsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListStudioLifecycleConfigsXAmzTargetEnum(str, Enum):
    SAGE_MAKER_LIST_STUDIO_LIFECYCLE_CONFIGS = "SageMaker.ListStudioLifecycleConfigs"


@dataclass
class ListStudioLifecycleConfigsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListStudioLifecycleConfigsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListStudioLifecycleConfigsRequest:
    query_params: ListStudioLifecycleConfigsQueryParams = field(default=None)
    headers: ListStudioLifecycleConfigsHeaders = field(default=None)
    request: shared.ListStudioLifecycleConfigsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListStudioLifecycleConfigsResponse:
    content_type: str = field(default=None)
    list_studio_lifecycle_configs_response: Optional[shared.ListStudioLifecycleConfigsResponse] = field(default=None)
    resource_in_use: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
