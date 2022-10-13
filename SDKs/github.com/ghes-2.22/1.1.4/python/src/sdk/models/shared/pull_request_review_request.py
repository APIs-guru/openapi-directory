from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import team_simple
from . import simple_user


@dataclass_json
@dataclass
class PullRequestReviewRequest:
    teams: List[team_simple.TeamSimple] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams' }})
    users: List[simple_user.SimpleUser] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'users' }})
    
