from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Week:
    first_game_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstGameStart' }})
    last_game_start: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastGameStart' }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'season' }})
    season_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seasonType' }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'week' }})
    
