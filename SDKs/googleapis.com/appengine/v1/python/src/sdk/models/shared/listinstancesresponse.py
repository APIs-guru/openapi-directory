from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instance


@dataclass_json
@dataclass
class ListInstancesResponse:
    instances: Optional[List[instance.Instance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instances' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
