from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComparedFace:
    r"""ComparedFace
    Provides face metadata for target image faces that are analyzed by <code>CompareFaces</code> and <code>RecognizeCelebrities</code>.
    """
    
    bounding_box: Optional[BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    emotions: Optional[List[Emotion]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Emotions') }})
    landmarks: Optional[List[Landmark]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Landmarks') }})
    pose: Optional[Pose] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Pose') }})
    quality: Optional[ImageQuality] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Quality') }})
    smile: Optional[Smile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Smile') }})
    
