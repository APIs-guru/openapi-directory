from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import inputparallelism
from . import inputprocessingconfigurationdescription
from . import sourceschema
from . import inputstartingpositionconfiguration
from . import kinesisfirehoseinputdescription
from . import kinesisstreamsinputdescription


@dataclass_json
@dataclass
class InputDescription:
    in_app_stream_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InAppStreamNames' }})
    input_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputId' }})
    input_parallelism: Optional[inputparallelism.InputParallelism] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputParallelism' }})
    input_processing_configuration_description: Optional[inputprocessingconfigurationdescription.InputProcessingConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputProcessingConfigurationDescription' }})
    input_schema: Optional[sourceschema.SourceSchema] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputSchema' }})
    input_starting_position_configuration: Optional[inputstartingpositionconfiguration.InputStartingPositionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputStartingPositionConfiguration' }})
    kinesis_firehose_input_description: Optional[kinesisfirehoseinputdescription.KinesisFirehoseInputDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisFirehoseInputDescription' }})
    kinesis_streams_input_description: Optional[kinesisstreamsinputdescription.KinesisStreamsInputDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisStreamsInputDescription' }})
    name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NamePrefix' }})
    
