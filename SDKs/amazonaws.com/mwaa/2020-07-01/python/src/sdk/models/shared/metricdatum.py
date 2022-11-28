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
class MetricDatum:
    r"""MetricDatum
    Internal only API.
    """
    
    metric_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('MetricName') }})
    timestamp: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Timestamp'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dimensions: Optional[List[Dimension]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dimensions') }})
    statistic_values: Optional[StatisticSet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatisticValues') }})
    unit: Optional[UnitEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Unit') }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Value') }})
    
