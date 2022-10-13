from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import offsetinfo
from . import basef3xfiling


@dataclass_json
@dataclass
class BaseF3XFilingPage:
    pagination: Optional[offsetinfo.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: Optional[List[basef3xfiling.BaseF3XFiling]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
