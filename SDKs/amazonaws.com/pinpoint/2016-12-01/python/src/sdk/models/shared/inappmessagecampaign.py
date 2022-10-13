from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inappmessage
from . import inappcampaignschedule


@dataclass_json
@dataclass
class InAppMessageCampaign:
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CampaignId' }})
    daily_cap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DailyCap' }})
    in_app_message: Optional[inappmessage.InAppMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InAppMessage' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    schedule: Optional[inappcampaignschedule.InAppCampaignSchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    session_cap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SessionCap' }})
    total_cap: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TotalCap' }})
    treatment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TreatmentId' }})
    
