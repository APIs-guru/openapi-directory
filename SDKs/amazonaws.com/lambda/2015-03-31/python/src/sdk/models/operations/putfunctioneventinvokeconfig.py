from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class PutFunctionEventInvokeConfigPathParams:
    function_name: str = field(metadata={'path_param': { 'field_name': 'FunctionName', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutFunctionEventInvokeConfigQueryParams:
    qualifier: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'Qualifier', 'style': 'form', 'explode': True }})
    

@dataclass
class PutFunctionEventInvokeConfigHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class PutFunctionEventInvokeConfigRequestBodyDestinationConfig:
    r"""PutFunctionEventInvokeConfigRequestBodyDestinationConfig
    A configuration object that specifies the destination of an event after Lambda processes it.
    """
    
    on_failure: Optional[shared.OnFailure] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnFailure') }})
    on_success: Optional[shared.OnSuccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnSuccess') }})
    

@dataclass_json
@dataclass
class PutFunctionEventInvokeConfigRequestBody:
    destination_config: Optional[PutFunctionEventInvokeConfigRequestBodyDestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationConfig') }})
    maximum_event_age_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumEventAgeInSeconds') }})
    maximum_retry_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRetryAttempts') }})
    

@dataclass
class PutFunctionEventInvokeConfigRequest:
    headers: PutFunctionEventInvokeConfigHeaders = field()
    path_params: PutFunctionEventInvokeConfigPathParams = field()
    query_params: PutFunctionEventInvokeConfigQueryParams = field()
    request: PutFunctionEventInvokeConfigRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutFunctionEventInvokeConfigResponse:
    content_type: str = field()
    status_code: int = field()
    function_event_invoke_config: Optional[shared.FunctionEventInvokeConfig] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
