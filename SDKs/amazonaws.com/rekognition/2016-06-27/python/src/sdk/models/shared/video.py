from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Video:
    r"""Video
    Video file stored in an Amazon S3 bucket. Amazon Rekognition video start operations such as <a>StartLabelDetection</a> use <code>Video</code> to specify a video for analysis. The supported file formats are .mp4, .mov and .avi.
    """
    
    s3_object: Optional[S3Object] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Object') }})
    
