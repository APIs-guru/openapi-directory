from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""VideoTargeting
    Represents targeting information about video.
    """
    
    excluded_position_types: Optional[List[VideoTargetingExcludedPositionTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excludedPositionTypes') }})
    targeted_position_types: Optional[List[VideoTargetingTargetedPositionTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetedPositionTypes') }})
    
