from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import activityresponse


@dataclass_json
@dataclass
class ActivitiesResponse:
    item: List[activityresponse.ActivityResponse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Item' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
