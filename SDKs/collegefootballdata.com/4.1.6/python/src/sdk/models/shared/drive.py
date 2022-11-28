from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DriveEndTime:
    minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minutes') }})
    seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seconds') }})
    

@dataclass_json
@dataclass
class DriveStartTime:
    minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minutes') }})
    seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seconds') }})
    

@dataclass_json
@dataclass
class Drive:
    defense: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defense') }})
    defense_conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defense_conference') }})
    drive_number: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drive_number') }})
    drive_result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drive_result') }})
    end_defense_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_defense_score') }})
    end_offense_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_offense_score') }})
    end_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_period') }})
    end_time: Optional[DriveEndTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_time') }})
    end_yardline: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_yardline') }})
    end_yards_to_goal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_yards_to_goal') }})
    game_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('game_id') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_home_offense: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('is_home_offense') }})
    offense: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offense') }})
    offense_conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offense_conference') }})
    plays: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    scoring: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scoring') }})
    start_defense_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_defense_score') }})
    start_offense_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_offense_score') }})
    start_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_period') }})
    start_time: Optional[DriveStartTime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time') }})
    start_yardline: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_yardline') }})
    start_yards_to_goal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_yards_to_goal') }})
    yards: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('yards') }})
    
