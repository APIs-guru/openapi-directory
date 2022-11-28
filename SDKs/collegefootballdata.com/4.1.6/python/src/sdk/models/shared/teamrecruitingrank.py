from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TeamRecruitingRank:
    points: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rank') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
