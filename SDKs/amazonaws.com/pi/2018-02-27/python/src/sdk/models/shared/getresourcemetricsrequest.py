from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import metricquery
from . import servicetype_enum


@dataclass_json
@dataclass
class GetResourceMetricsRequest:
    end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    identifier: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identifier' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    metric_queries: List[metricquery.MetricQuery] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricQueries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    period_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PeriodInSeconds' }})
    service_type: servicetype_enum.ServiceTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceType' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
