from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InsightSummary:
    r"""InsightSummary
    Information that describes an insight.
    """
    
    categories: Optional[List[InsightCategoryEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Categories') }})
    client_request_impact_statistics: Optional[RequestImpactStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientRequestImpactStatistics') }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EndTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupARN') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    insight_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InsightId') }})
    last_update_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastUpdateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    root_cause_service_id: Optional[ServiceID] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootCauseServiceId') }})
    root_cause_service_request_impact_statistics: Optional[RequestImpactStatistics] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootCauseServiceRequestImpactStatistics') }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StartTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[InsightStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    summary: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Summary') }})
    top_anomalous_services: Optional[List[AnomalousService]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TopAnomalousServices') }})
    
