from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import attribute_enum
from . import image
from . import qualityfilter_enum


@dataclass_json
@dataclass
class IndexFacesRequest:
    collection_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CollectionId' }})
    detection_attributes: Optional[List[attribute_enum.AttributeEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DetectionAttributes' }})
    external_image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExternalImageId' }})
    image: image.Image = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Image' }})
    max_faces: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxFaces' }})
    quality_filter: Optional[qualityfilter_enum.QualityFilterEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualityFilter' }})
    
