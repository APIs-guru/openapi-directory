from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class ListProvisionedConcurrencyConfigsPathParams:
    function_name: str = field(default=None, metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    
class ListProvisionedConcurrencyConfigsListEnum(str, Enum):
    ALL = "ALL"


@dataclass
class ListProvisionedConcurrencyConfigsQueryParams:
    list: ListProvisionedConcurrencyConfigsListEnum = field(default=None, metadata={'query_param': { 'field_name': 'List', 'style': 'form', 'explode': True }})
    marker: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Marker', 'style': 'form', 'explode': True }})
    max_items: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'MaxItems', 'style': 'form', 'explode': True }})
    

@dataclass
class ListProvisionedConcurrencyConfigsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class ListProvisionedConcurrencyConfigsRequest:
    path_params: ListProvisionedConcurrencyConfigsPathParams = field(default=None)
    query_params: ListProvisionedConcurrencyConfigsQueryParams = field(default=None)
    headers: ListProvisionedConcurrencyConfigsHeaders = field(default=None)
    

@dataclass
class ListProvisionedConcurrencyConfigsResponse:
    content_type: str = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    list_provisioned_concurrency_configs_response: Optional[shared.ListProvisionedConcurrencyConfigsResponse] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
