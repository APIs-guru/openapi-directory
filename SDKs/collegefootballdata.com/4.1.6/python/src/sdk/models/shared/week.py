from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Week:
    first_game_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstGameStart') }})
    last_game_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastGameStart') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    season_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seasonType') }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    
