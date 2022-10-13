from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetProvisionedConcurrencyConfigPathParams:
    function_name: str = field(default=None, metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetProvisionedConcurrencyConfigQueryParams:
    qualifier: str = field(default=None, metadata={'query_param': { 'field_name': 'Qualifier', 'style': 'form', 'explode': True }})
    

@dataclass
class GetProvisionedConcurrencyConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass
class GetProvisionedConcurrencyConfigRequest:
    path_params: GetProvisionedConcurrencyConfigPathParams = field(default=None)
    query_params: GetProvisionedConcurrencyConfigQueryParams = field(default=None)
    headers: GetProvisionedConcurrencyConfigHeaders = field(default=None)
    

@dataclass
class GetProvisionedConcurrencyConfigResponse:
    content_type: str = field(default=None)
    get_provisioned_concurrency_config_response: Optional[shared.GetProvisionedConcurrencyConfigResponse] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    provisioned_concurrency_config_not_found_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
