from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import campaign


@dataclass_json
@dataclass
class DescribeCampaignResponse:
    campaign: Optional[campaign.Campaign] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaign' }})
    
