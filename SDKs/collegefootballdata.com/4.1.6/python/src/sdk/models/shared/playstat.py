from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PlayStatClock:
    minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minutes' }})
    seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'seconds' }})
    

@dataclass_json
@dataclass
class PlayStat:
    athlete_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'athleteId' }})
    athlete_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'athleteName' }})
    clock: Optional[PlayStatClock] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clock' }})
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conference' }})
    distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distance' }})
    down: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'down' }})
    drive_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'driveId' }})
    game_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gameId' }})
    opponent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opponent' }})
    opponent_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opponentScore' }})
    period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    play_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playId' }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'season' }})
    stat: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stat' }})
    stat_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'statType' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    team_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teamScore' }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'week' }})
    yards_to_goal: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'yardsToGoal' }})
    
