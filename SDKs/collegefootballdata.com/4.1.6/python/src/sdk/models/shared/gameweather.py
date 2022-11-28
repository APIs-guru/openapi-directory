from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GameWeather:
    away_conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awayConference') }})
    away_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('awayTeam') }})
    dew_point: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dewPoint') }})
    home_conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeConference') }})
    home_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('homeTeam') }})
    humidity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('humidity') }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_start_time_tbd: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isStartTimeTBD') }})
    precipitation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('precipitation') }})
    pressure: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pressure') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    season_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('seasonType') }})
    snowfall: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snowfall') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    temperature: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temperature') }})
    venue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venue') }})
    venue_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('venueId') }})
    weather_condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weatherCondition') }})
    weather_condition_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weatherConditionCode') }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    wind_direction: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windDirection') }})
    wind_speed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('windSpeed') }})
    
