from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KinesisFirehoseInput:
    r"""KinesisFirehoseInput
    For a SQL-based Kinesis Data Analytics application, identifies a Kinesis Data Firehose delivery stream as the streaming source. You provide the delivery stream's Amazon Resource Name (ARN).
    """
    
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    
