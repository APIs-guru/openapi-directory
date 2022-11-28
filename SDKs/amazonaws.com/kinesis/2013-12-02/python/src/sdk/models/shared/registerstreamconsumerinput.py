from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RegisterStreamConsumerInput:
    consumer_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ConsumerName') }})
    stream_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StreamARN') }})
    
