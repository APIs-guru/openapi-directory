from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListStateMachinesQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    
class ListStateMachinesXAmzTargetEnum(str, Enum):
    AWS_STEP_FUNCTIONS_LIST_STATE_MACHINES = "AWSStepFunctions.ListStateMachines"


@dataclass
class ListStateMachinesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListStateMachinesXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListStateMachinesRequest:
    query_params: ListStateMachinesQueryParams = field(default=None)
    headers: ListStateMachinesHeaders = field(default=None)
    request: shared.ListStateMachinesInput = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListStateMachinesResponse:
    content_type: str = field(default=None)
    invalid_token: Optional[Any] = field(default=None)
    list_state_machines_output: Optional[shared.ListStateMachinesOutput] = field(default=None)
    status_code: int = field(default=None)
    
