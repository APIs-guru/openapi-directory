from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import unprocessedtracesegment


@dataclass_json
@dataclass
class PutTraceSegmentsResult:
    unprocessed_trace_segments: Optional[List[unprocessedtracesegment.UnprocessedTraceSegment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnprocessedTraceSegments' }})
    
