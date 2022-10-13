from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tracesummary


@dataclass_json
@dataclass
class GetTraceSummariesResult:
    approximate_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApproximateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    trace_summaries: Optional[List[tracesummary.TraceSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TraceSummaries' }})
    traces_processed_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TracesProcessedCount' }})
    
