from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetParameterHistoryQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetParameterHistoryXAmzTargetEnum(str, Enum):
    AMAZON_SSM_GET_PARAMETER_HISTORY = "AmazonSSM.GetParameterHistory"


@dataclass
class GetParameterHistoryHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetParameterHistoryXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetParameterHistoryRequest:
    query_params: GetParameterHistoryQueryParams = field(default=None)
    headers: GetParameterHistoryHeaders = field(default=None)
    request: shared.GetParameterHistoryRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetParameterHistoryResponse:
    content_type: str = field(default=None)
    get_parameter_history_result: Optional[shared.GetParameterHistoryResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_key_id: Optional[Any] = field(default=None)
    invalid_next_token: Optional[Any] = field(default=None)
    parameter_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
