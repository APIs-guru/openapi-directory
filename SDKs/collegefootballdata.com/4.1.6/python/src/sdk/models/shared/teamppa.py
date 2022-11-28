from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TeamPpaDefenseCumulative:
    passing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    rushing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class TeamPpaDefense:
    cumulative: Optional[TeamPpaDefenseCumulative] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cumulative') }})
    first_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstDown') }})
    overall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall') }})
    passing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    rushing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    second_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondDown') }})
    third_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdDown') }})
    

@dataclass_json
@dataclass
class TeamPpaOffenseCumulative:
    passing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    rushing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class TeamPpaOffense:
    cumulative: Optional[TeamPpaOffenseCumulative] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cumulative') }})
    first_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstDown') }})
    overall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall') }})
    passing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passing') }})
    rushing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushing') }})
    second_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondDown') }})
    third_down: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('thirdDown') }})
    

@dataclass_json
@dataclass
class TeamPpa:
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    defense: Optional[TeamPpaDefense] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defense') }})
    offense: Optional[TeamPpaOffense] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offense') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    
