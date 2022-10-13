from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TrialComponentMetricSummary:
    avg: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Avg' }})
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    last: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Last' }})
    max: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Max' }})
    metric_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MetricName' }})
    min: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Min' }})
    source_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceArn' }})
    std_dev: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StdDev' }})
    time_stamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeStamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
