from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetContainerServiceMetricDataRequest:
    end_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    metric_name: ContainerServiceMetricNameEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('metricName') }})
    period: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    service_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('serviceName') }})
    start_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    statistics: List[MetricStatisticEnum] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('statistics') }})
    
