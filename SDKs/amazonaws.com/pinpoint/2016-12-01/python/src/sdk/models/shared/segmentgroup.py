from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import segmentdimensions
from . import segmentreference
from . import sourcetype_enum
from . import type_enum


@dataclass_json
@dataclass
class SegmentGroup:
    dimensions: Optional[List[segmentdimensions.SegmentDimensions]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimensions' }})
    source_segments: Optional[List[segmentreference.SegmentReference]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceSegments' }})
    source_type: Optional[sourcetype_enum.SourceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceType' }})
    type: Optional[type_enum.TypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
