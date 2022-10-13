from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import campaignsummary


@dataclass_json
@dataclass
class ListCampaignsResponse:
    campaigns: Optional[List[campaignsummary.CampaignSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'campaigns' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
