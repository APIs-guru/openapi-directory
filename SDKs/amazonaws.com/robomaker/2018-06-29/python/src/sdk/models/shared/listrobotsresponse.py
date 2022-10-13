from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import robot


@dataclass_json
@dataclass
class ListRobotsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    robots: Optional[List[robot.Robot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'robots' }})
    
