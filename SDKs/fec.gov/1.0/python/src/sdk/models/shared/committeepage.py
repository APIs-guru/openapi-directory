from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import offsetinfo
from . import committee


@dataclass_json
@dataclass
class CommitteePage:
    pagination: Optional[offsetinfo.OffsetInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pagination' }})
    results: Optional[List[committee.Committee]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'results' }})
    
