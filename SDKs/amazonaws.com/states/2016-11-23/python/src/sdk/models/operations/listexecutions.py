from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListExecutionsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListExecutionsXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_LIST_EXECUTIONS = "AWSStepFunctions.ListExecutions"


@dataclass
class ListExecutionsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListExecutionsXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListExecutionsRequest:
    query_params: ListExecutionsQueryParams = field(default=None)
    headers: ListExecutionsHeaders = field(default=None)
    request: shared.ListExecutionsInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListExecutionsResponse:
    content_type: str = field(default=None)
    invalid_arn: Optional[Any] = field(default=None)
    invalid_token: Optional[Any] = field(default=None)
    list_executions_output: Optional[shared.ListExecutionsOutput] = field(default=None)
    state_machine_does_not_exist: Optional[Any] = field(default=None)
    state_machine_type_not_supported: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
