from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import offsetinfo
from . import basef3filing


@dataclass_json
@dataclass
class BaseF3FilingPage:
    pagination: Optional[offsetinfo.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: Optional[List[basef3filing.BaseF3Filing]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
