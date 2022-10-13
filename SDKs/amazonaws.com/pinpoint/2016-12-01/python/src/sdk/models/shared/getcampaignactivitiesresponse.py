from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import activitiesresponse


@dataclass_json
@dataclass
class GetCampaignActivitiesResponse:
    activities_response: activitiesresponse.ActivitiesResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivitiesResponse' }})
    
