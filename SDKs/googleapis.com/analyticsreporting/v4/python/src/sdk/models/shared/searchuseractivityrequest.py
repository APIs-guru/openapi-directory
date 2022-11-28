from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class SearchUserActivityRequestActivityTypesEnum(str, Enum):
    ACTIVITY_TYPE_UNSPECIFIED = "ACTIVITY_TYPE_UNSPECIFIED"
    PAGEVIEW = "PAGEVIEW"
    SCREENVIEW = "SCREENVIEW"
    GOAL = "GOAL"
    ECOMMERCE = "ECOMMERCE"
    EVENT = "EVENT"


@dataclass_json
@dataclass
class SearchUserActivityRequest:
    r"""SearchUserActivityRequest
    The request to fetch User Report from Reporting API `userActivity:get` call.
    """
    
    activity_types: Optional[List[SearchUserActivityRequestActivityTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activityTypes') }})
    date_range: Optional[DateRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dateRange') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    view_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('viewId') }})
    
