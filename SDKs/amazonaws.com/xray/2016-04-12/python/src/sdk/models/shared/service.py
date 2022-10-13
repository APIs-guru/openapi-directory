from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import histogramentry
from . import edge
from . import histogramentry
from . import servicestatistics


@dataclass_json
@dataclass
class Service:
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AccountId' }})
    duration_histogram: Optional[List[histogramentry.HistogramEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DurationHistogram' }})
    edges: Optional[List[edge.Edge]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Edges' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Names' }})
    reference_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceId' }})
    response_time_histogram: Optional[List[histogramentry.HistogramEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseTimeHistogram' }})
    root: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Root' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    summary_statistics: Optional[servicestatistics.ServiceStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SummaryStatistics' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
