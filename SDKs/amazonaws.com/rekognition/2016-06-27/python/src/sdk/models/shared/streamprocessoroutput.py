from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamProcessorOutput:
    r"""StreamProcessorOutput
    Information about the Amazon Kinesis Data Streams stream to which a Amazon Rekognition Video stream processor streams the results of a video analysis. For more information, see CreateStreamProcessor in the Amazon Rekognition Developer Guide.
    """
    
    kinesis_data_stream: Optional[KinesisDataStream] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KinesisDataStream') }})
    
