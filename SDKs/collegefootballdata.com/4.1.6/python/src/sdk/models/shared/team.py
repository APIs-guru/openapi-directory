from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TeamLocation:
    capacity: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capacity' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    dome: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dome' }})
    elevation: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'elevation' }})
    grass: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'grass' }})
    latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latitude' }})
    longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'longitude' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    timezone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timezone' }})
    venue_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'venue_id' }})
    year_constructed: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year_constructed' }})
    zip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'zip' }})
    

@dataclass_json
@dataclass
class Team:
    abbreviation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'abbreviation' }})
    alt_color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alt_color' }})
    alt_name_1: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alt_name_1' }})
    alt_name_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alt_name_2' }})
    alt_name_3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alt_name_3' }})
    color: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    conference: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conference' }})
    division: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'division' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location: Optional[TeamLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    logos: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logos' }})
    mascot: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mascot' }})
    school: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'school' }})
    
