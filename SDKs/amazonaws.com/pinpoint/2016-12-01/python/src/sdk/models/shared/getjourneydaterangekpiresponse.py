from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import journeydaterangekpiresponse


@dataclass_json
@dataclass
class GetJourneyDateRangeKpiResponse:
    journey_date_range_kpi_response: journeydaterangekpiresponse.JourneyDateRangeKpiResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JourneyDateRangeKpiResponse' }})
    
