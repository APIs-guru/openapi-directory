from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Output:
    r"""Output
    <p> Describes application output configuration in which you identify an in-application stream and a destination where you want the in-application stream data to be written. The destination can be an Amazon Kinesis stream or an Amazon Kinesis Firehose delivery stream. </p> <p/> <p>For limits on how many destinations an application can write and other limitations, see <a href=\"https://docs.aws.amazon.com/kinesisanalytics/latest/dev/limits.html\">Limits</a>. </p>
    """
    
    destination_schema: DestinationSchema = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DestinationSchema') }})
    name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Name') }})
    kinesis_firehose_output: Optional[KinesisFirehoseOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisFirehoseOutput') }})
    kinesis_streams_output: Optional[KinesisStreamsOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisStreamsOutput') }})
    lambda_output: Optional[LambdaOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LambdaOutput') }})
    
