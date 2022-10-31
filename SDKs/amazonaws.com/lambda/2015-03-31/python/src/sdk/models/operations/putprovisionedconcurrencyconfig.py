from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutProvisionedConcurrencyConfigPathParams:
    function_name: str = field(default=None, metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutProvisionedConcurrencyConfigQueryParams:
    qualifier: str = field(default=None, metadata={'query_param': { 'field_name': 'Qualifier', 'style': 'form', 'explode': True }})
    

@dataclass
class PutProvisionedConcurrencyConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutProvisionedConcurrencyConfigRequestBody:
    provisioned_concurrent_executions: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ProvisionedConcurrentExecutions' }})
    

@dataclass
class PutProvisionedConcurrencyConfigRequest:
    path_params: PutProvisionedConcurrencyConfigPathParams = field(default=None)
    query_params: PutProvisionedConcurrencyConfigQueryParams = field(default=None)
    headers: PutProvisionedConcurrencyConfigHeaders = field(default=None)
    request: PutProvisionedConcurrencyConfigRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutProvisionedConcurrencyConfigResponse:
    content_type: str = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    put_provisioned_concurrency_config_response: Optional[shared.PutProvisionedConcurrencyConfigResponse] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
