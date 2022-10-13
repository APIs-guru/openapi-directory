from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import campaignstatus_enum


@dataclass_json
@dataclass
class CampaignState:
    campaign_status: Optional[campaignstatus_enum.CampaignStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CampaignStatus' }})
    
