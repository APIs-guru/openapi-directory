from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SearchFacesByImageRequest:
    collection_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionId') }})
    image: Image = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    face_match_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FaceMatchThreshold') }})
    max_faces: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxFaces') }})
    quality_filter: Optional[QualityFilterEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualityFilter') }})
    
