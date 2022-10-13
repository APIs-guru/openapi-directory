from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import offsetinfo
from . import presidentialbysize


@dataclass_json
@dataclass
class PresidentialBySizePage:
    pagination: Optional[offsetinfo.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: Optional[List[presidentialbysize.PresidentialBySize]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
