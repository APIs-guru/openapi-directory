from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TeamSrsRating:
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('division') }})
    ranking: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ranking') }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
