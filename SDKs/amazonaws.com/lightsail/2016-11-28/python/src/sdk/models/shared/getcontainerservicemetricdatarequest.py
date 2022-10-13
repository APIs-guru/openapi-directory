from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import containerservicemetricname_enum
from . import metricstatistic_enum


@dataclass_json
@dataclass
class GetContainerServiceMetricDataRequest:
    end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metric_name: containerservicemetricname_enum.ContainerServiceMetricNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    period: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    statistics: List[metricstatistic_enum.MetricStatisticEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    
