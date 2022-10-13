from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateEventSourceMappingHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class CreateEventSourceMappingRequestBodyDestinationConfig:
    on_failure: Optional[shared.OnFailure] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnFailure' }})
    on_success: Optional[shared.OnSuccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OnSuccess' }})
    

@dataclass_json
@dataclass
class CreateEventSourceMappingRequestBodySelfManagedEventSource:
    endpoints: Optional[dict[str, List[str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Endpoints' }})
    
class CreateEventSourceMappingRequestBodyStartingPositionEnum(str, Enum):
    TRIM_HORIZON = "TRIM_HORIZON"
    LATEST = "LATEST"
    AT_TIMESTAMP = "AT_TIMESTAMP"


@dataclass_json
@dataclass
class CreateEventSourceMappingRequestBody:
    batch_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchSize' }})
    bisect_batch_on_function_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BisectBatchOnFunctionError' }})
    destination_config: Optional[CreateEventSourceMappingRequestBodyDestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationConfig' }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Enabled' }})
    event_source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSourceArn' }})
    function_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionName' }})
    function_response_types: Optional[List[shared.FunctionResponseTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionResponseTypes' }})
    maximum_batching_window_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumBatchingWindowInSeconds' }})
    maximum_record_age_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumRecordAgeInSeconds' }})
    maximum_retry_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumRetryAttempts' }})
    parallelization_factor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelizationFactor' }})
    queues: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Queues' }})
    self_managed_event_source: Optional[CreateEventSourceMappingRequestBodySelfManagedEventSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelfManagedEventSource' }})
    source_access_configurations: Optional[List[shared.SourceAccessConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceAccessConfigurations' }})
    starting_position: Optional[CreateEventSourceMappingRequestBodyStartingPositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartingPosition' }})
    starting_position_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartingPositionTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    topics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Topics' }})
    tumbling_window_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TumblingWindowInSeconds' }})
    

@dataclass
class CreateEventSourceMappingRequest:
    headers: CreateEventSourceMappingHeaders = field(default=None)
    request: CreateEventSourceMappingRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateEventSourceMappingResponse:
    content_type: str = field(default=None)
    event_source_mapping_configuration: Optional[shared.EventSourceMappingConfiguration] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    resource_conflict_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
