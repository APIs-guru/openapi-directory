from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import routine


@dataclass_json
@dataclass
class ListRoutinesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    routines: Optional[List[routine.Routine]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'routines' }})
    
