from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RecruitHometownInfo:
    county_fips: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countyFips' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    

@dataclass_json
@dataclass
class Recruit:
    athlete_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'athleteId' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    committed_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'committedTo' }})
    country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country' }})
    height: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    hometown_info: Optional[RecruitHometownInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hometownInfo' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    ranking: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ranking' }})
    rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    recruit_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recruitType' }})
    school: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'school' }})
    stars: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stars' }})
    state_province: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateProvince' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
