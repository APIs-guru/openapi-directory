from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import kinesisdatastream


@dataclass_json
@dataclass
class StreamProcessorOutput:
    kinesis_data_stream: Optional[kinesisdatastream.KinesisDataStream] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisDataStream' }})
    
