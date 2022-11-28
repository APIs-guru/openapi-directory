from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamProcessorInput:
    r"""StreamProcessorInput
    Information about the source streaming video. 
    """
    
    kinesis_video_stream: Optional[KinesisVideoStream] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisVideoStream') }})
    
