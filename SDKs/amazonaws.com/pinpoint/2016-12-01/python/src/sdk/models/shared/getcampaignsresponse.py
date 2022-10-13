from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import campaignsresponse


@dataclass_json
@dataclass
class GetCampaignsResponse:
    campaigns_response: campaignsresponse.CampaignsResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CampaignsResponse' }})
    
