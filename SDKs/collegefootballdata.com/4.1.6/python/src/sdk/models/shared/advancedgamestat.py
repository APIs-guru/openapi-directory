from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AdvancedGameStatDefensePassingDowns:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclass
class AdvancedGameStatDefensePassingPlays:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclass
class AdvancedGameStatDefenseRushingPlays:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclass
class AdvancedGameStatDefenseStandardDowns:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclass
class AdvancedGameStatDefense:
    drives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drives') }})
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    line_yards: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYards') }})
    line_yards_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYardsTotal') }})
    open_field_yards: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYards') }})
    open_field_yards_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYardsTotal') }})
    passing_downs: Optional[AdvancedGameStatDefensePassingDowns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingDowns') }})
    passing_plays: Optional[AdvancedGameStatDefensePassingPlays] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingPlays') }})
    plays: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    power_success: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerSuccess') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rushing_plays: Optional[AdvancedGameStatDefenseRushingPlays] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushingPlays') }})
    second_level_yards: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYards') }})
    second_level_yards_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYardsTotal') }})
    standard_downs: Optional[AdvancedGameStatDefenseStandardDowns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDowns') }})
    stuff_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stuffRate') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclass
class AdvancedGameStatOffensePassingDowns:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclass
class AdvancedGameStatOffensePassingPlays:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclass
class AdvancedGameStatOffenseRushingPlays:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclass
class AdvancedGameStatOffenseStandardDowns:
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    

@dataclass_json
@dataclass
class AdvancedGameStatOffense:
    drives: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drives') }})
    explosiveness: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('explosiveness') }})
    line_yards: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYards') }})
    line_yards_total: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineYardsTotal') }})
    open_field_yards: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYards') }})
    open_field_yards_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('openFieldYardsTotal') }})
    passing_downs: Optional[AdvancedGameStatOffensePassingDowns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingDowns') }})
    passing_plays: Optional[AdvancedGameStatOffensePassingPlays] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('passingPlays') }})
    plays: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('plays') }})
    power_success: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('powerSuccess') }})
    ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ppa') }})
    rushing_plays: Optional[AdvancedGameStatOffenseRushingPlays] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rushingPlays') }})
    second_level_yards: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYards') }})
    second_level_yards_total: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('secondLevelYardsTotal') }})
    standard_downs: Optional[AdvancedGameStatOffenseStandardDowns] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('standardDowns') }})
    stuff_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stuffRate') }})
    success_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('successRate') }})
    total_ppa: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalPPA') }})
    

@dataclass_json
@dataclass
class AdvancedGameStat:
    defense: Optional[AdvancedGameStatDefense] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('defense') }})
    game_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('gameId') }})
    offense: Optional[AdvancedGameStatOffense] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offense') }})
    opponent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opponent') }})
    season: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('season') }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('team') }})
    week: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('week') }})
    
