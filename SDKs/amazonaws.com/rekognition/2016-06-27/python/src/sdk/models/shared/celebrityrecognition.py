from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CelebrityRecognition:
    r"""CelebrityRecognition
    Information about a detected celebrity and the time the celebrity was detected in a stored video. For more information, see GetCelebrityRecognition in the Amazon Rekognition Developer Guide.
    """
    
    celebrity: Optional[CelebrityDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Celebrity') }})
    timestamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp') }})
    
