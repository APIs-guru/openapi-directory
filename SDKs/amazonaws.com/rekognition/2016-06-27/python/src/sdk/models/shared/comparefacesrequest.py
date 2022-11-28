from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CompareFacesRequest:
    source_image: Image = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceImage') }})
    target_image: Image = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('TargetImage') }})
    quality_filter: Optional[QualityFilterEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualityFilter') }})
    similarity_threshold: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SimilarityThreshold') }})
    
