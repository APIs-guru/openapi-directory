from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CohortsRangeGranularityEnum(str, Enum):
    GRANULARITY_UNSPECIFIED = "GRANULARITY_UNSPECIFIED"
    DAILY = "DAILY"
    WEEKLY = "WEEKLY"
    MONTHLY = "MONTHLY"


@dataclass_json
@dataclass
class CohortsRange:
    end_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endOffset' }})
    granularity: Optional[CohortsRangeGranularityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'granularity' }})
    start_offset: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startOffset' }})
    
