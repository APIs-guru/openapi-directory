from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared


@dataclass
class DescribeParametersQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class DescribeParametersXAmzTargetEnum(str, Enum):
    AMAZON_SSM_DESCRIBE_PARAMETERS = "AmazonSSM.DescribeParameters"


@dataclass
class DescribeParametersHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: DescribeParametersXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class DescribeParametersRequest:
    query_params: DescribeParametersQueryParams = field(default=None)
    headers: DescribeParametersHeaders = field(default=None)
    request: shared.DescribeParametersRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeParametersResponse:
    content_type: str = field(default=None)
    describe_parameters_result: Optional[shared.DescribeParametersResult] = field(default=None)
    internal_server_error: Optional[Any] = field(default=None)
    invalid_filter_key: Optional[Any] = field(default=None)
    invalid_filter_option: Optional[Any] = field(default=None)
    invalid_filter_value: Optional[Any] = field(default=None)
    invalid_next_token: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
