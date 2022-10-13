from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TeamMatchupGames:
    away_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awayScore' }})
    away_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'awayTeam' }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    home_score: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeScore' }})
    home_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'homeTeam' }})
    neutral_site: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'neutralSite' }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'season' }})
    season_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'season_type' }})
    venue: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'venue' }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'week' }})
    winner: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'winner' }})
    

@dataclass_json
@dataclass
class TeamMatchup:
    end_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endYear' }})
    games: Optional[List[TeamMatchupGames]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'games' }})
    start_year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startYear' }})
    team1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team1' }})
    team1_wins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team1Wins' }})
    team2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team2' }})
    team2_wins: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team2Wins' }})
    ties: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ties' }})
    
