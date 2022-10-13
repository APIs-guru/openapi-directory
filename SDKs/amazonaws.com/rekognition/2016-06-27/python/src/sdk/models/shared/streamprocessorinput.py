from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import kinesisvideostream


@dataclass_json
@dataclass
class StreamProcessorInput:
    kinesis_video_stream: Optional[kinesisvideostream.KinesisVideoStream] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KinesisVideoStream' }})
    
