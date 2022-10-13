from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import trace


@dataclass_json
@dataclass
class BatchGetTracesResult:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    traces: Optional[List[trace.Trace]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Traces' }})
    unprocessed_trace_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedTraceIds' }})
    
