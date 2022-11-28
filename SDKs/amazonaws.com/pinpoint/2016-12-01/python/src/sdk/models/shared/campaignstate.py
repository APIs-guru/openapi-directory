from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CampaignState:
    r"""CampaignState
    Provides information about the status of a campaign.
    """
    
    campaign_status: Optional[CampaignStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CampaignStatus') }})
    
