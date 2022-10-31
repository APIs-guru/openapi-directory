from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListServiceQuotasQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'MaxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    
class ListServiceQuotasXAmzTargetEnum(str, Enum):
    SERVICE_QUOTAS_V20190624_LIST_SERVICE_QUOTAS = "ServiceQuotasV20190624.ListServiceQuotas"


@dataclass
class ListServiceQuotasHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ListServiceQuotasXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ListServiceQuotasRequest:
    query_params: ListServiceQuotasQueryParams = field(default=None)
    headers: ListServiceQuotasHeaders = field(default=None)
    request: shared.ListServiceQuotasRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListServiceQuotasResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    illegal_argument_exception: Optional[Any] = field(default=None)
    invalid_pagination_token_exception: Optional[Any] = field(default=None)
    list_service_quotas_response: Optional[shared.ListServiceQuotasResponse] = field(default=None)
    no_such_resource_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
