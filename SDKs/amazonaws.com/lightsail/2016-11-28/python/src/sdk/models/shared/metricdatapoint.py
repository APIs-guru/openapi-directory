from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import metricunit_enum


@dataclass_json
@dataclass
class MetricDatapoint:
    average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'average' }})
    maximum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximum' }})
    minimum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimum' }})
    sample_count: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleCount' }})
    sum: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    unit: Optional[metricunit_enum.MetricUnitEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    
