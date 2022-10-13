from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class VideoTargetingExcludedPositionTypesEnum(str, Enum):
    POSITION_TYPE_UNSPECIFIED = "POSITION_TYPE_UNSPECIFIED"
    PREROLL = "PREROLL"
    MIDROLL = "MIDROLL"
    POSTROLL = "POSTROLL"

class VideoTargetingTargetedPositionTypesEnum(str, Enum):
    POSITION_TYPE_UNSPECIFIED = "POSITION_TYPE_UNSPECIFIED"
    PREROLL = "PREROLL"
    MIDROLL = "MIDROLL"
    POSTROLL = "POSTROLL"


@dataclass_json
@dataclass
class VideoTargeting:
    excluded_position_types: Optional[List[VideoTargetingExcludedPositionTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'excludedPositionTypes' }})
    targeted_position_types: Optional[List[VideoTargetingTargetedPositionTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetedPositionTypes' }})
    
