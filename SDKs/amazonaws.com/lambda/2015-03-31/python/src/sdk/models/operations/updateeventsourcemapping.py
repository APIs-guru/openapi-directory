from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class UpdateEventSourceMappingPathParams:
    uuid: str = field(metadata={'path_param': { 'field_name': 'UUID', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateEventSourceMappingHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class UpdateEventSourceMappingRequestBodyDestinationConfig:
    r"""UpdateEventSourceMappingRequestBodyDestinationConfig
    A configuration object that specifies the destination of an event after Lambda processes it.
    """
    
    on_failure: Optional[shared.OnFailure] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnFailure') }})
    on_success: Optional[shared.OnSuccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OnSuccess') }})
    

@dataclass_json
@dataclass
class UpdateEventSourceMappingRequestBody:
    batch_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchSize') }})
    bisect_batch_on_function_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BisectBatchOnFunctionError') }})
    destination_config: Optional[UpdateEventSourceMappingRequestBodyDestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationConfig') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    function_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionName') }})
    function_response_types: Optional[List[shared.FunctionResponseTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionResponseTypes') }})
    maximum_batching_window_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumBatchingWindowInSeconds') }})
    maximum_record_age_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRecordAgeInSeconds') }})
    maximum_retry_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRetryAttempts') }})
    parallelization_factor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelizationFactor') }})
    source_access_configurations: Optional[List[shared.SourceAccessConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceAccessConfigurations') }})
    tumbling_window_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TumblingWindowInSeconds') }})
    

@dataclass
class UpdateEventSourceMappingRequest:
    headers: UpdateEventSourceMappingHeaders = field()
    path_params: UpdateEventSourceMappingPathParams = field()
    request: UpdateEventSourceMappingRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdateEventSourceMappingResponse:
    content_type: str = field()
    status_code: int = field()
    event_source_mapping_configuration: Optional[shared.EventSourceMappingConfiguration] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_in_use_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
