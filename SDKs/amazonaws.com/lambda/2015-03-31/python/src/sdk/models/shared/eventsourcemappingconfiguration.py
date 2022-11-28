from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventSourceMappingConfiguration:
    r"""EventSourceMappingConfiguration
    A mapping between an Amazon Web Services resource and a Lambda function. For details, see <a>CreateEventSourceMapping</a>.
    """
    
    batch_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BatchSize') }})
    bisect_batch_on_function_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BisectBatchOnFunctionError') }})
    destination_config: Optional[DestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationConfig') }})
    event_source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventSourceArn') }})
    function_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionArn') }})
    function_response_types: Optional[List[FunctionResponseTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FunctionResponseTypes') }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_processing_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastProcessingResult') }})
    maximum_batching_window_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumBatchingWindowInSeconds') }})
    maximum_record_age_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRecordAgeInSeconds') }})
    maximum_retry_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaximumRetryAttempts') }})
    parallelization_factor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParallelizationFactor') }})
    queues: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Queues') }})
    self_managed_event_source: Optional[SelfManagedEventSource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SelfManagedEventSource') }})
    source_access_configurations: Optional[List[SourceAccessConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceAccessConfigurations') }})
    starting_position: Optional[EventSourcePositionEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartingPosition') }})
    starting_position_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartingPositionTimestamp'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    state_transition_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StateTransitionReason') }})
    topics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Topics') }})
    tumbling_window_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TumblingWindowInSeconds') }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UUID') }})
    
