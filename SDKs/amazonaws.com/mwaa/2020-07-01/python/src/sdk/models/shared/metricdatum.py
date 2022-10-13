from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import dimension
from . import statisticset
from . import unit_enum


@dataclass_json
@dataclass
class MetricDatum:
    dimensions: Optional[List[dimension.Dimension]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dimensions' }})
    metric_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    statistic_values: Optional[statisticset.StatisticSet] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StatisticValues' }})
    timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    unit: Optional[unit_enum.UnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Unit' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
