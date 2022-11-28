from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdvancedSeasonStatDefenseFieldPosition:
    average_predicted_points: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averagePredictedPoints') }})
    average_start: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageStart') }})
    

@dataclass_json
@dataclass
class AdvancedSeasonStatDefenseHavoc:
    db: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('db') }})
    front_seven: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frontSeven') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class AdvancedSeasonStatDefensePassingDowns:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclass
class AdvancedSeasonStatDefensePassingPlays:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclass
class AdvancedSeasonStatDefenseRushingPlays:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclass
class AdvancedSeasonStatDefenseStandardDowns:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclass
class AdvancedSeasonStatDefense:
    drives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drives') }})
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    field_position: Optional[AdvancedSeasonStatDefenseFieldPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldPosition') }})
    havoc: Optional[AdvancedSeasonStatDefenseHavoc] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('havoc') }})
    line_yards: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYards') }})
    line_yards_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYardsTotal') }})
    open_field_yards: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYards') }})
    open_field_yards_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYardsTotal') }})
    passing_downs: Optional[AdvancedSeasonStatDefensePassingDowns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingDowns') }})
    passing_plays: Optional[AdvancedSeasonStatDefensePassingPlays] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingPlays') }})
    plays: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    points_per_opportunity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointsPerOpportunity') }})
    power_success: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerSuccess') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rushing_plays: Optional[AdvancedSeasonStatDefenseRushingPlays] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushingPlays') }})
    second_level_yards: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYards') }})
    second_level_yards_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYardsTotal') }})
    standard_downs: Optional[AdvancedSeasonStatDefenseStandardDowns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDowns') }})
    stuff_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stuffRate') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclass
class AdvancedSeasonStatOffenseFieldPosition:
    average_predicted_points: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averagePredictedPoints') }})
    average_start: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('averageStart') }})
    

@dataclass_json
@dataclass
class AdvancedSeasonStatOffenseHavoc:
    db: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('db') }})
    front_seven: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frontSeven') }})
    total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total') }})
    

@dataclass_json
@dataclass
class AdvancedSeasonStatOffensePassingDowns:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclass
class AdvancedSeasonStatOffensePassingPlays:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclass
class AdvancedSeasonStatOffenseRushingPlays:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclass
class AdvancedSeasonStatOffenseStandardDowns:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rate') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclass
class AdvancedSeasonStatOffense:
    drives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drives') }})
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    field_position: Optional[AdvancedSeasonStatOffenseFieldPosition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fieldPosition') }})
    havoc: Optional[AdvancedSeasonStatOffenseHavoc] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('havoc') }})
    line_yards: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYards') }})
    line_yards_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYardsTotal') }})
    open_field_yards: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYards') }})
    open_field_yards_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYardsTotal') }})
    passing_downs: Optional[AdvancedSeasonStatOffensePassingDowns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingDowns') }})
    passing_plays: Optional[AdvancedSeasonStatOffensePassingPlays] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingPlays') }})
    plays: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    points_per_opportunity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pointsPerOpportunity') }})
    power_success: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerSuccess') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rushing_plays: Optional[AdvancedSeasonStatOffenseRushingPlays] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushingPlays') }})
    second_level_yards: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYards') }})
    second_level_yards_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYardsTotal') }})
    standard_downs: Optional[AdvancedSeasonStatOffenseStandardDowns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDowns') }})
    stuff_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stuffRate') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclass
class AdvancedSeasonStat:
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conference') }})
    defense: Optional[AdvancedSeasonStatDefense] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defense') }})
    offense: Optional[AdvancedSeasonStatOffense] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offense') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    
