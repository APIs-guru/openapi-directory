from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IndexFacesRequest:
    collection_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionId') }})
    image: Image = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Image') }})
    detection_attributes: Optional[List[AttributeEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DetectionAttributes') }})
    external_image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ExternalImageId') }})
    max_faces: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxFaces') }})
    quality_filter: Optional[QualityFilterEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualityFilter') }})
    
