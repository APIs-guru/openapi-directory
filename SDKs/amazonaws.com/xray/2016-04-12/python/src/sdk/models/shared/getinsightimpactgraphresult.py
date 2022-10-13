from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import insightimpactgraphservice


@dataclass_json
@dataclass
class GetInsightImpactGraphResult:
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    insight_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InsightId' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    service_graph_end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceGraphEndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    service_graph_start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceGraphStartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    services: Optional[List[insightimpactgraphservice.InsightImpactGraphService]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Services' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
