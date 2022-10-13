from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import campaignhook
from . import campaignlimits
from . import quiettime


@dataclass_json
@dataclass
class ApplicationSettingsResource:
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    campaign_hook: Optional[campaignhook.CampaignHook] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CampaignHook' }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    limits: Optional[campaignlimits.CampaignLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limits' }})
    quiet_time: Optional[quiettime.QuietTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuietTime' }})
    
