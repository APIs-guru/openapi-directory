from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import team


@dataclass_json
@dataclass
class TeamList:
    sum: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    teams: List[team.Team] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams' }})
    
