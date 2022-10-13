from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import requestimpactstatistics
from . import requestimpactstatistics
from . import anomalousservice


@dataclass_json
@dataclass
class InsightEvent:
    client_request_impact_statistics: Optional[requestimpactstatistics.RequestImpactStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestImpactStatistics' }})
    event_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EventTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    root_cause_service_request_impact_statistics: Optional[requestimpactstatistics.RequestImpactStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootCauseServiceRequestImpactStatistics' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Summary' }})
    top_anomalous_services: Optional[List[anomalousservice.AnomalousService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopAnomalousServices' }})
    
