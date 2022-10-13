from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class GetParametersByPathQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class GetParametersByPathXAmzTargetEnum(str, Enum):
    AMAZON_SSM_GET_PARAMETERS_BY_PATH = "AmazonSSM.GetParametersByPath"


@dataclass
class GetParametersByPathHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetParametersByPathXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetParametersByPathRequest:
    query_params: GetParametersByPathQueryParams = field(default=None)
    headers: GetParametersByPathHeaders = field(default=None)
    request: shared.GetParametersByPathRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetParametersByPathResponse:
    content_type: str = field(default=None)
    get_parameters_by_path_result: Optional[shared.GetParametersByPathResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_filter_key: Optional[Any] = field(default=None)
    invalid_filter_option: Optional[Any] = field(default=None)
    invalid_filter_value: Optional[Any] = field(default=None)
    invalid_key_id: Optional[Any] = field(default=None)
    invalid_next_token: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
