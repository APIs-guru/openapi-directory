from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamProcessorSettings:
    r"""StreamProcessorSettings
    Input parameters used to recognize faces in a streaming video analyzed by a Amazon Rekognition stream processor.
    """
    
    face_search: Optional[FaceSearchSettings] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceSearch') }})
    
