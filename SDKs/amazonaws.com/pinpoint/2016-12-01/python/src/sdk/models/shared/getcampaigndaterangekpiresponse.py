from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import campaigndaterangekpiresponse


@dataclass_json
@dataclass
class GetCampaignDateRangeKpiResponse:
    campaign_date_range_kpi_response: campaigndaterangekpiresponse.CampaignDateRangeKpiResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CampaignDateRangeKpiResponse' }})
    
