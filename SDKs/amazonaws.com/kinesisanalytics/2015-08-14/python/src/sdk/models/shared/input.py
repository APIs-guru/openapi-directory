from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Input:
    r"""Input
    When you configure the application input, you specify the streaming source, the in-application stream name that is created, and the mapping between the two. For more information, see <a href=\"https://docs.aws.amazon.com/kinesisanalytics/latest/dev/how-it-works-input.html\">Configuring Application Input</a>. 
    """
    
    input_schema: SourceSchema = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputSchema') }})
    name_prefix: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('NamePrefix') }})
    input_parallelism: Optional[InputParallelism] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputParallelism') }})
    input_processing_configuration: Optional[InputProcessingConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InputProcessingConfiguration') }})
    kinesis_firehose_input: Optional[KinesisFirehoseInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseInput') }})
    kinesis_streams_input: Optional[KinesisStreamsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamsInput') }})
    
