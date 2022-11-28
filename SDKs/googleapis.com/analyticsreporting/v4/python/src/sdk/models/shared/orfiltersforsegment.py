from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OrFiltersForSegment:
    r"""OrFiltersForSegment
    A list of segment filters in the `OR` group are combined with the logical OR operator.
    """
    
    segment_filter_clauses: Optional[List[SegmentFilterClause]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('segmentFilterClauses') }})
    
