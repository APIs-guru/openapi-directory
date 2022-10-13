from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListAwsDefaultServiceQuotasQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListAwsDefaultServiceQuotasXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_LIST_AWS_DEFAULT_SERVICE_QUOTAS = "ServiceQuotasV20190624.ListAWSDefaultServiceQuotas"


@dataclass
class ListAwsDefaultServiceQuotasHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ListAwsDefaultServiceQuotasXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ListAwsDefaultServiceQuotasRequest:
    query_params: ListAwsDefaultServiceQuotasQueryParams = field(default=None)
    headers: ListAwsDefaultServiceQuotasHeaders = field(default=None)
    request: shared.ListAwsDefaultServiceQuotasRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListAwsDefaultServiceQuotasResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    illegal_argument_exception: Optional[Any] = field(default=None)
    invalid_pagination_token_exception: Optional[Any] = field(default=None)
    list_aws_default_service_quotas_response: Optional[shared.ListAwsDefaultServiceQuotasResponse] = field(default=None)
    no_such_resource_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
