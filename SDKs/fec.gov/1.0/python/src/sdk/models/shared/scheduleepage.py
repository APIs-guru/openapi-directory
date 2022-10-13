from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import seekinfo
from . import schedulee


@dataclass_json
@dataclass
class ScheduleEPage:
    pagination: Optional[seekinfo.SeekInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: Optional[List[schedulee.ScheduleE]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
