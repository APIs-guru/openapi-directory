from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CampaignEventFilter:
    r"""CampaignEventFilter
    Specifies the settings for events that cause a campaign to be sent.
    """
    
    dimensions: EventDimensions = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    filter_type: FilterTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterType') }})
    
