from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alias
from . import histogramentry
from . import edgestatistics


@dataclass_json
@dataclass
class Edge:
    aliases: Optional[List[alias.Alias]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Aliases' }})
    end_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    reference_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReferenceId' }})
    response_time_histogram: Optional[List[histogramentry.HistogramEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResponseTimeHistogram' }})
    start_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    summary_statistics: Optional[edgestatistics.EdgeStatistics] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SummaryStatistics' }})
    
