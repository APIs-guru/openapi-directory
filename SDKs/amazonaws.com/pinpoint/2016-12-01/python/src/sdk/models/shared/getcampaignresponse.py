from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import campaignresponse


@dataclass_json
@dataclass
class GetCampaignResponse:
    campaign_response: campaignresponse.CampaignResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CampaignResponse' }})
    
