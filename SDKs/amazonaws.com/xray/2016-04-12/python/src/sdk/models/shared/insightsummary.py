from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import insightcategory_enum
from . import requestimpactstatistics
from . import serviceid
from . import requestimpactstatistics
from . import insightstate_enum
from . import anomalousservice


@dataclass_json
@dataclass
class InsightSummary:
    categories: Optional[List[insightcategory_enum.InsightCategoryEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Categories' }})
    client_request_impact_statistics: Optional[requestimpactstatistics.RequestImpactStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientRequestImpactStatistics' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupARN' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupName' }})
    insight_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightId' }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastUpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    root_cause_service_id: Optional[serviceid.ServiceID] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootCauseServiceId' }})
    root_cause_service_request_impact_statistics: Optional[requestimpactstatistics.RequestImpactStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootCauseServiceRequestImpactStatistics' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[insightstate_enum.InsightStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Summary' }})
    top_anomalous_services: Optional[List[anomalousservice.AnomalousService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TopAnomalousServices' }})
    
