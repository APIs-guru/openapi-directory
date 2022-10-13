from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import offsetinfo
from . import committeehistory


@dataclass_json
@dataclass
class CommitteeHistoryPage:
    pagination: Optional[offsetinfo.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: Optional[List[committeehistory.CommitteeHistory]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
