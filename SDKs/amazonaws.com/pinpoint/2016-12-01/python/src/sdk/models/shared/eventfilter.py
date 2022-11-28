from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class EventFilter:
    r"""EventFilter
    Specifies the settings for an event that causes a campaign to be sent or a journey activity to be performed.
    """
    
    dimensions: EventDimensions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    filter_type: FilterTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterType') }})
    
