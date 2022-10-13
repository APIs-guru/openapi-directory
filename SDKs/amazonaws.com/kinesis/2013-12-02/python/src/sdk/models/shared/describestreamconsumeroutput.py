from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import consumerdescription


@dataclass_json
@dataclass
class DescribeStreamConsumerOutput:
    consumer_description: consumerdescription.ConsumerDescription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ConsumerDescription' }})
    
