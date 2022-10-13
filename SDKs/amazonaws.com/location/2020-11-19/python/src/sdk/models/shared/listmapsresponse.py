from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listmapsresponseentry


@dataclass_json
@dataclass
class ListMapsResponse:
    entries: List[listmapsresponseentry.ListMapsResponseEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
