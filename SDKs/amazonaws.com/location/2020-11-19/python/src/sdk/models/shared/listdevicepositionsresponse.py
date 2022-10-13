from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listdevicepositionsresponseentry


@dataclass_json
@dataclass
class ListDevicePositionsResponse:
    entries: List[listdevicepositionsresponseentry.ListDevicePositionsResponseEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
