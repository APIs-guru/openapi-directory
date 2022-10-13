from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import activitylistitem


@dataclass_json
@dataclass
class ListActivitiesOutput:
    activities: List[activitylistitem.ActivityListItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activities' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
