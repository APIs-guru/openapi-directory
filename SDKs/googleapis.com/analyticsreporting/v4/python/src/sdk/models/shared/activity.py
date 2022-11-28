from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ActivityActivityTypeEnum(str, Enum):
    ACTIVITY_TYPE_UNSPECIFIED = "ACTIVITY_TYPE_UNSPECIFIED"
    PAGEVIEW = "PAGEVIEW"
    SCREENVIEW = "SCREENVIEW"
    GOAL = "GOAL"
    ECOMMERCE = "ECOMMERCE"
    EVENT = "EVENT"


@dataclass_json
@dataclass
class Activity:
    r"""Activity
    An Activity represents data for an activity of a user. Note that an Activity is different from a hit. A hit might result in multiple Activity's. For example, if a hit includes a transaction and a goal completion, there will be two Activity protos for this hit, one for ECOMMERCE and one for GOAL. Conversely, multiple hits can also construct one Activity. In classic e-commerce, data for one transaction might be sent through multiple hits. These hits will be merged into one ECOMMERCE Activity.
    """
    
    activity_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityTime') }})
    activity_type: Optional[ActivityActivityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityType') }})
    appview: Optional[ScreenviewData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appview') }})
    campaign: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaign') }})
    channel_grouping: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channelGrouping') }})
    custom_dimension: Optional[List[CustomDimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customDimension') }})
    ecommerce: Optional[EcommerceData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ecommerce') }})
    event: Optional[EventData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event') }})
    goals: Optional[GoalSetData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('goals') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hostname') }})
    keyword: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyword') }})
    landing_page_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('landingPagePath') }})
    medium: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('medium') }})
    pageview: Optional[PageviewData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageview') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
