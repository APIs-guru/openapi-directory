from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeregisterStreamConsumerInput:
    consumer_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumerARN' }})
    consumer_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumerName' }})
    stream_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamARN' }})
    
