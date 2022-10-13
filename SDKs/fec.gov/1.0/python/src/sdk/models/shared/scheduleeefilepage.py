from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import offsetinfo
from . import scheduleeefile


@dataclass_json
@dataclass
class ScheduleEEfilePage:
    pagination: Optional[offsetinfo.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: Optional[List[scheduleeefile.ScheduleEEfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
