from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import screenviewdata
from . import customdimension
from . import ecommercedata
from . import eventdata
from . import goalsetdata
from . import pageviewdata

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
    activity_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityTime' }})
    activity_type: Optional[ActivityActivityTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activityType' }})
    appview: Optional[screenviewdata.ScreenviewData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appview' }})
    campaign: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaign' }})
    channel_grouping: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelGrouping' }})
    custom_dimension: Optional[List[customdimension.CustomDimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customDimension' }})
    ecommerce: Optional[ecommercedata.EcommerceData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ecommerce' }})
    event: Optional[eventdata.EventData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event' }})
    goals: Optional[goalsetdata.GoalSetData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'goals' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hostname' }})
    keyword: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyword' }})
    landing_page_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'landingPagePath' }})
    medium: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'medium' }})
    pageview: Optional[pageviewdata.PageviewData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageview' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    
