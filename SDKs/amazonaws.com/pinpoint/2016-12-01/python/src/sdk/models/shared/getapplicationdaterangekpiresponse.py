from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import applicationdaterangekpiresponse


@dataclass_json
@dataclass
class GetApplicationDateRangeKpiResponse:
    application_date_range_kpi_response: applicationdaterangekpiresponse.ApplicationDateRangeKpiResponse = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationDateRangeKpiResponse' }})
    
