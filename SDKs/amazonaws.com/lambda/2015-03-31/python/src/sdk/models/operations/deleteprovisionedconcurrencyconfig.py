from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteProvisionedConcurrencyConfigPathParams:
    function_name: str = field(default=None, metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProvisionedConcurrencyConfigQueryParams:
    qualifier: str = field(default=None, metadata={'query_param': { 'field_name': 'Qualifier', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteProvisionedConcurrencyConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteProvisionedConcurrencyConfigRequest:
    path_params: DeleteProvisionedConcurrencyConfigPathParams = field(default=None)
    query_params: DeleteProvisionedConcurrencyConfigQueryParams = field(default=None)
    headers: DeleteProvisionedConcurrencyConfigHeaders = field(default=None)
    

@dataclass
class DeleteProvisionedConcurrencyConfigResponse:
    content_type: str = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
