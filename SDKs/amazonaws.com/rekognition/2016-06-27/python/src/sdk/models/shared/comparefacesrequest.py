from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import qualityfilter_enum
from . import image
from . import image


@dataclass_json
@dataclass
class CompareFacesRequest:
    quality_filter: Optional[qualityfilter_enum.QualityFilterEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QualityFilter' }})
    similarity_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SimilarityThreshold' }})
    source_image: image.Image = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceImage' }})
    target_image: image.Image = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetImage' }})
    
