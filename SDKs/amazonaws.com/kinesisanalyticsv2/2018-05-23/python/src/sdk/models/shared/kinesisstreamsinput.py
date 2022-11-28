from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KinesisStreamsInput:
    r"""KinesisStreamsInput
     Identifies a Kinesis data stream as the streaming source. You provide the stream's Amazon Resource Name (ARN).
    """
    
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    
