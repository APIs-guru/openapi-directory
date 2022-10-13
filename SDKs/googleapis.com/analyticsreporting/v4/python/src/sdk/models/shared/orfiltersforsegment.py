from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import segmentfilterclause


@dataclass_json
@dataclass
class OrFiltersForSegment:
    segment_filter_clauses: Optional[List[segmentfilterclause.SegmentFilterClause]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'segmentFilterClauses' }})
    
