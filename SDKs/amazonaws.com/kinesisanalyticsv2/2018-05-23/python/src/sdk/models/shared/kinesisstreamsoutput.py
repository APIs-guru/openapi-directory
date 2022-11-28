from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KinesisStreamsOutput:
    r"""KinesisStreamsOutput
    When you configure a SQL-based Kinesis Data Analytics application's output, identifies a Kinesis data stream as the destination. You provide the stream Amazon Resource Name (ARN). 
    """
    
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    
