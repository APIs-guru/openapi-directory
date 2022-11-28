from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SegmentGroup:
    r"""SegmentGroup
    Specifies the base segments and dimensions for a segment, and the relationships between these base segments and dimensions.
    """
    
    dimensions: Optional[List[SegmentDimensions]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    source_segments: Optional[List[SegmentReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceSegments') }})
    source_type: Optional[SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceType') }})
    type: Optional[TypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Type') }})
    
