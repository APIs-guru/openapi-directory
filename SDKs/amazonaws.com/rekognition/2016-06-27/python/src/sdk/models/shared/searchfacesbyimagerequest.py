from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import image
from . import qualityfilter_enum


@dataclass_json
@dataclass
class SearchFacesByImageRequest:
    collection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionId' }})
    face_match_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FaceMatchThreshold' }})
    image: image.Image = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Image' }})
    max_faces: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxFaces' }})
    quality_filter: Optional[qualityfilter_enum.QualityFilterEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualityFilter' }})
    
