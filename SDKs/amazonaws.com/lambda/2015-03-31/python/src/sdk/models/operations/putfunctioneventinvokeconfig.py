from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PutFunctionEventInvokeConfigPathParams:
    function_name: str = field(default=None, metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutFunctionEventInvokeConfigQueryParams:
    qualifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Qualifier', 'style': 'form', 'explode': True }})
    

@dataclass
class PutFunctionEventInvokeConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class PutFunctionEventInvokeConfigRequestBodyDestinationConfig:
    on_failure: Optional[shared.OnFailure] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnFailure' }})
    on_success: Optional[shared.OnSuccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnSuccess' }})
    

@dataclass_json
@dataclass
class PutFunctionEventInvokeConfigRequestBody:
    destination_config: Optional[PutFunctionEventInvokeConfigRequestBodyDestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationConfig' }})
    maximum_event_age_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumEventAgeInSeconds' }})
    maximum_retry_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumRetryAttempts' }})
    

@dataclass
class PutFunctionEventInvokeConfigRequest:
    path_params: PutFunctionEventInvokeConfigPathParams = field(default=None)
    query_params: PutFunctionEventInvokeConfigQueryParams = field(default=None)
    headers: PutFunctionEventInvokeConfigHeaders = field(default=None)
    request: PutFunctionEventInvokeConfigRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutFunctionEventInvokeConfigResponse:
    content_type: str = field(default=None)
    function_event_invoke_config: Optional[shared.FunctionEventInvokeConfig] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
