from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InAppMessageCampaign:
    r"""InAppMessageCampaign
    Targeted in-app message campaign.
    """
    
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CampaignId') }})
    daily_cap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DailyCap') }})
    in_app_message: Optional[InAppMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InAppMessage') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Priority') }})
    schedule: Optional[InAppCampaignSchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Schedule') }})
    session_cap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SessionCap') }})
    total_cap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalCap') }})
    treatment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TreatmentId') }})
    
