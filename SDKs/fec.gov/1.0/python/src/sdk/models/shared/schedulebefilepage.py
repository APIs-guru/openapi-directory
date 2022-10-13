from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import offsetinfo
from . import schedulebefile


@dataclass_json
@dataclass
class ScheduleBEfilePage:
    pagination: Optional[offsetinfo.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: Optional[List[schedulebefile.ScheduleBEfile]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
