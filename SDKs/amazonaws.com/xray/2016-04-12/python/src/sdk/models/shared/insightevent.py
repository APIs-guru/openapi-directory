from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InsightEvent:
    r"""InsightEvent
    X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console.
    """
    
    client_request_impact_statistics: Optional[RequestImpactStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestImpactStatistics') }})
    event_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EventTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    root_cause_service_request_impact_statistics: Optional[RequestImpactStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootCauseServiceRequestImpactStatistics') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    top_anomalous_services: Optional[List[AnomalousService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopAnomalousServices') }})
    
