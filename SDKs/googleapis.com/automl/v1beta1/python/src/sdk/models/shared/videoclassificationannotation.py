from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class VideoClassificationAnnotation:
    r"""VideoClassificationAnnotation
    Contains annotation details specific to video classification.
    """
    
    classification_annotation: Optional[ClassificationAnnotation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classificationAnnotation') }})
    time_segment: Optional[TimeSegment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeSegment') }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
