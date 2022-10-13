from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BoxScorePlayersPpaAverage:
    passing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passing' }})
    quarter1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter1' }})
    quarter2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter2' }})
    quarter3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter3' }})
    quarter4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter4' }})
    rushing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rushing' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BoxScorePlayersPpaCumulative:
    passing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passing' }})
    quarter1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter1' }})
    quarter2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter2' }})
    quarter3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter3' }})
    quarter4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter4' }})
    rushing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rushing' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BoxScorePlayersPpa:
    average: Optional[BoxScorePlayersPpaAverage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'average' }})
    cumulative: Optional[BoxScorePlayersPpaCumulative] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cumulative' }})
    player: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'player' }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    

@dataclass_json
@dataclass
class BoxScorePlayersUsage:
    passing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passing' }})
    player: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'player' }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    quarter1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter1' }})
    quarter2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter2' }})
    quarter3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter3' }})
    quarter4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter4' }})
    rushing: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rushing' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BoxScorePlayers:
    ppa: Optional[List[BoxScorePlayersPpa]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ppa' }})
    usage: Optional[List[BoxScorePlayersUsage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'usage' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsCumulativePpaOverall:
    quarter1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter1' }})
    quarter2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter2' }})
    quarter3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter3' }})
    quarter4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter4' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsCumulativePpaPassing:
    quarter1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter1' }})
    quarter2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter2' }})
    quarter3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter3' }})
    quarter4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter4' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsCumulativePpaRushing:
    quarter1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter1' }})
    quarter2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter2' }})
    quarter3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter3' }})
    quarter4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter4' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsCumulativePpa:
    overall: Optional[BoxScoreTeamsCumulativePpaOverall] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overall' }})
    passing: Optional[BoxScoreTeamsCumulativePpaPassing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passing' }})
    plays: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plays' }})
    rushing: Optional[BoxScoreTeamsCumulativePpaRushing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rushing' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsExplosivenessOverall:
    quarter1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter1' }})
    quarter2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter2' }})
    quarter3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter3' }})
    quarter4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter4' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsExplosiveness:
    overall: Optional[BoxScoreTeamsExplosivenessOverall] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overall' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsFieldPosition:
    average_start: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageStart' }})
    average_starting_predicted_points: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageStartingPredictedPoints' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsHavoc:
    db: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'db' }})
    front_seven: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frontSeven' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsPpaOverall:
    quarter1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter1' }})
    quarter2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter2' }})
    quarter3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter3' }})
    quarter4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter4' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsPpaPassing:
    quarter1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter1' }})
    quarter2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter2' }})
    quarter3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter3' }})
    quarter4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter4' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsPpaRushing:
    quarter1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter1' }})
    quarter2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter2' }})
    quarter3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter3' }})
    quarter4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter4' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsPpa:
    overall: Optional[BoxScoreTeamsPpaOverall] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overall' }})
    passing: Optional[BoxScoreTeamsPpaPassing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passing' }})
    plays: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plays' }})
    rushing: Optional[BoxScoreTeamsPpaRushing] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rushing' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsRushing:
    line_yards: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineYards' }})
    line_yards_average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineYardsAverage' }})
    open_field_yards: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openFieldYards' }})
    open_field_yards_average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openFieldYardsAverage' }})
    power_success: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'powerSuccess' }})
    second_level_yards: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondLevelYards' }})
    second_level_yards_average: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'secondLevelYardsAverage' }})
    stuff_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stuffRate' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsScoringOpportunities:
    opportunities: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opportunities' }})
    points: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'points' }})
    points_per_opportunity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pointsPerOpportunity' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsSuccessRatesOverall:
    quarter1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter1' }})
    quarter2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter2' }})
    quarter3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter3' }})
    quarter4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter4' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsSuccessRatesPassingDowns:
    quarter1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter1' }})
    quarter2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter2' }})
    quarter3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter3' }})
    quarter4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter4' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsSuccessRatesStandardDowns:
    quarter1: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter1' }})
    quarter2: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter2' }})
    quarter3: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter3' }})
    quarter4: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quarter4' }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'total' }})
    

@dataclass_json
@dataclass
class BoxScoreTeamsSuccessRates:
    overall: Optional[BoxScoreTeamsSuccessRatesOverall] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overall' }})
    passing_downs: Optional[BoxScoreTeamsSuccessRatesPassingDowns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'passingDowns' }})
    standard_downs: Optional[BoxScoreTeamsSuccessRatesStandardDowns] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'standardDowns' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    

@dataclass_json
@dataclass
class BoxScoreTeams:
    cumulative_ppa: Optional[List[BoxScoreTeamsCumulativePpa]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cumulativePpa' }})
    explosiveness: Optional[List[BoxScoreTeamsExplosiveness]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'explosiveness' }})
    field_position: Optional[List[BoxScoreTeamsFieldPosition]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldPosition' }})
    havoc: Optional[List[BoxScoreTeamsHavoc]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'havoc' }})
    ppa: Optional[List[BoxScoreTeamsPpa]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ppa' }})
    rushing: Optional[List[BoxScoreTeamsRushing]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rushing' }})
    scoring_opportunities: Optional[List[BoxScoreTeamsScoringOpportunities]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scoringOpportunities' }})
    success_rates: Optional[List[BoxScoreTeamsSuccessRates]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successRates' }})
    

@dataclass_json
@dataclass
class BoxScore:
    players: Optional[BoxScorePlayers] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'players' }})
    teams: Optional[BoxScoreTeams] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'teams' }})
    
