from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InAppCampaignSchedule:
    r"""InAppCampaignSchedule
    Schedule of the campaign.
    """
    
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndDate') }})
    event_filter: Optional[CampaignEventFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventFilter') }})
    quiet_time: Optional[QuietTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QuietTime') }})
    
