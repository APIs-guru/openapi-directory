from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DraftPickHometownInfo:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country') }})
    country_fips: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('countryFips') }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latitude') }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('longitude') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    

@dataclass_json
@dataclass
class DraftPick:
    college_athlete_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collegeAthleteId') }})
    college_conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collegeConference') }})
    college_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collegeId') }})
    college_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collegeTeam') }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('height') }})
    hometown_info: Optional[DraftPickHometownInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('hometownInfo') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    nfl_athlete_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nflAthleteId') }})
    nfl_team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nflTeam') }})
    overall: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall') }})
    pick: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pick') }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    pre_draft_grade: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preDraftGrade') }})
    pre_draft_position_ranking: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preDraftPositionRanking') }})
    pre_draft_ranking: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preDraftRanking') }})
    round: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('round') }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weight') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
