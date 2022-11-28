from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PlayerGamePpaAveragePpa:
    all: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all') }})
    pass_: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pass') }})
    rush: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rush') }})
    

@dataclass_json
@dataclass
class PlayerGamePpa:
    average_ppa: Optional[PlayerGamePpaAveragePpa] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averagePPA') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    opponent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opponent') }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    
