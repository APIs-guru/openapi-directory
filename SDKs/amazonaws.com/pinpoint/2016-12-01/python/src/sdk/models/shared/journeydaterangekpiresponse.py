from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import basekpiresult


@dataclass_json
@dataclass
class JourneyDateRangeKpiResponse:
    application_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationId' }})
    end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    journey_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JourneyId' }})
    kpi_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KpiName' }})
    kpi_result: basekpiresult.BaseKpiResult = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KpiResult' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
