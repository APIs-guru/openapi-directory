from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import offsetinfo
from . import basef3pfiling


@dataclass_json
@dataclass
class BaseF3PFilingPage:
    pagination: Optional[offsetinfo.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: Optional[List[basef3pfiling.BaseF3PFiling]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
