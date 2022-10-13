from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegisterStreamConsumerInput:
    consumer_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumerName' }})
    stream_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamARN' }})
    
