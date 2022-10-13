from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import destinationconfig
from . import functionresponsetype_enum
from . import selfmanagedeventsource
from . import sourceaccessconfiguration
from . import eventsourceposition_enum


@dataclass_json
@dataclass
class EventSourceMappingConfiguration:
    batch_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BatchSize' }})
    bisect_batch_on_function_error: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BisectBatchOnFunctionError' }})
    destination_config: Optional[destinationconfig.DestinationConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DestinationConfig' }})
    event_source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventSourceArn' }})
    function_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionArn' }})
    function_response_types: Optional[List[functionresponsetype_enum.FunctionResponseTypeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FunctionResponseTypes' }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModified', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_processing_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastProcessingResult' }})
    maximum_batching_window_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumBatchingWindowInSeconds' }})
    maximum_record_age_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumRecordAgeInSeconds' }})
    maximum_retry_attempts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaximumRetryAttempts' }})
    parallelization_factor: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParallelizationFactor' }})
    queues: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Queues' }})
    self_managed_event_source: Optional[selfmanagedeventsource.SelfManagedEventSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SelfManagedEventSource' }})
    source_access_configurations: Optional[List[sourceaccessconfiguration.SourceAccessConfiguration]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceAccessConfigurations' }})
    starting_position: Optional[eventsourceposition_enum.EventSourcePositionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartingPosition' }})
    starting_position_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartingPositionTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    state_transition_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StateTransitionReason' }})
    topics: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Topics' }})
    tumbling_window_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TumblingWindowInSeconds' }})
    uuid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UUID' }})
    
