from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import seekinfo
from . import schedulea


@dataclass_json
@dataclass
class ScheduleAPage:
    pagination: Optional[seekinfo.SeekInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: Optional[List[schedulea.ScheduleA]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
