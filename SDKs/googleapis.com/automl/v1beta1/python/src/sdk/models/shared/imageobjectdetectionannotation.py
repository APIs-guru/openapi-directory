from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ImageObjectDetectionAnnotation:
    r"""ImageObjectDetectionAnnotation
    Annotation details for image object detection.
    """
    
    bounding_box: Optional[BoundingPoly] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boundingBox') }})
    score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('score') }})
    
