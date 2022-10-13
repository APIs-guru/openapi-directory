from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import streamdescription


@dataclass_json
@dataclass
class DescribeStreamOutput:
    stream_description: streamdescription.StreamDescription = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamDescription' }})
    
