from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import opsitemeventfilter


@dataclass_json
@dataclass
class ListOpsItemEventsRequest:
    filters: Optional[List[opsitemeventfilter.OpsItemEventFilter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filters' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
