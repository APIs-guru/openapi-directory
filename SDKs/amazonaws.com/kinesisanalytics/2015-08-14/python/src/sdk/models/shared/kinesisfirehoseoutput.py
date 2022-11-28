from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class KinesisFirehoseOutput:
    r"""KinesisFirehoseOutput
    When configuring application output, identifies an Amazon Kinesis Firehose delivery stream as the destination. You provide the stream Amazon Resource Name (ARN) and an IAM role that enables Amazon Kinesis Analytics to write to the stream on your behalf.
    """
    
    resource_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ResourceARN') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    
