from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import groupcount


@dataclass_json
@dataclass
class GetFindingStatisticsResponse:
    counts_by_group: Optional[List[groupcount.GroupCount]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countsByGroup' }})
    
