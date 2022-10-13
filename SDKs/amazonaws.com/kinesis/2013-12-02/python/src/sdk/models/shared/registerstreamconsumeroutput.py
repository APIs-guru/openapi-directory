from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import consumer


@dataclass_json
@dataclass
class RegisterStreamConsumerOutput:
    consumer: consumer.Consumer = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Consumer' }})
    
