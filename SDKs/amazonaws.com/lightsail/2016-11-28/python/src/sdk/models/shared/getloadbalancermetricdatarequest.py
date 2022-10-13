from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List
from dataclasses_json import dataclass_json
from . import loadbalancermetricname_enum
from . import metricstatistic_enum
from . import metricunit_enum


@dataclass_json
@dataclass
class GetLoadBalancerMetricDataRequest:
    end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    load_balancer_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'loadBalancerName' }})
    metric_name: loadbalancermetricname_enum.LoadBalancerMetricNameEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metricName' }})
    period: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    statistics: List[metricstatistic_enum.MetricStatisticEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statistics' }})
    unit: metricunit_enum.MetricUnitEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
