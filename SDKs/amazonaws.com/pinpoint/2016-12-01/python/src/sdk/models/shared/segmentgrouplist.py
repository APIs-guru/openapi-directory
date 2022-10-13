from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import segmentgroup
from . import include_enum


@dataclass_json
@dataclass
class SegmentGroupList:
    groups: Optional[List[segmentgroup.SegmentGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Groups' }})
    include: Optional[include_enum.IncludeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Include' }})
    
