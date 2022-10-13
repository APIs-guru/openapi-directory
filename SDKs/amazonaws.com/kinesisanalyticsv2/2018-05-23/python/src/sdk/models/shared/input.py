from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inputparallelism
from . import inputprocessingconfiguration
from . import sourceschema
from . import kinesisfirehoseinput
from . import kinesisstreamsinput


@dataclass_json
@dataclass
class Input:
    input_parallelism: Optional[inputparallelism.InputParallelism] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputParallelism' }})
    input_processing_configuration: Optional[inputprocessingconfiguration.InputProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputProcessingConfiguration' }})
    input_schema: sourceschema.SourceSchema = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InputSchema' }})
    kinesis_firehose_input: Optional[kinesisfirehoseinput.KinesisFirehoseInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisFirehoseInput' }})
    kinesis_streams_input: Optional[kinesisstreamsinput.KinesisStreamsInput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisStreamsInput' }})
    name_prefix: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NamePrefix' }})
    
