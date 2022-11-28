from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Face:
    r"""Face
    Describes the face properties such as the bounding box, face ID, image ID of the input image, and external image ID that you assigned. 
    """
    
    bounding_box: Optional[BoundingBox] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BoundingBox') }})
    confidence: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Confidence') }})
    external_image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalImageId') }})
    face_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceId') }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageId') }})
    
