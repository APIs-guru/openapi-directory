from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InputDescription:
    r"""InputDescription
    Describes the application input configuration. For more information, see <a href=\"https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html\">Configuring Application Input</a>. 
    """
    
    in_app_stream_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InAppStreamNames') }})
    input_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputId') }})
    input_parallelism: Optional[InputParallelism] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputParallelism') }})
    input_processing_configuration_description: Optional[InputProcessingConfigurationDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputProcessingConfigurationDescription') }})
    input_schema: Optional[SourceSchema] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputSchema') }})
    input_starting_position_configuration: Optional[InputStartingPositionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputStartingPositionConfiguration') }})
    kinesis_firehose_input_description: Optional[KinesisFirehoseInputDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseInputDescription') }})
    kinesis_streams_input_description: Optional[KinesisStreamsInputDescription] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamsInputDescription') }})
    name_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamePrefix') }})
    
