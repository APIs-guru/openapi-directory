from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Game:
    attendance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendance') }})
    away_conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('away_conference') }})
    away_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('away_id') }})
    away_line_scores: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('away_line_scores') }})
    away_points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('away_points') }})
    away_post_win_prob: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('away_post_win_prob') }})
    away_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('away_team') }})
    conference_game: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference_game') }})
    excitement_index: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('excitement_index') }})
    highlights: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highlights') }})
    home_conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_conference') }})
    home_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_id') }})
    home_line_scores: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_line_scores') }})
    home_points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_points') }})
    home_post_win_prob: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_post_win_prob') }})
    home_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('home_team') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    neutral_site: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('neutral_site') }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notes') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    season_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season_type') }})
    start_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_date') }})
    start_time_tbd: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_time_tbd') }})
    venue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venue') }})
    venue_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venue_id') }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    
