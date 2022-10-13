from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Player:
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'first_name' }})
    height: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    home_city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home_city' }})
    home_country: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home_country' }})
    home_county_fips: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home_county_fips' }})
    home_latitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home_latitude' }})
    home_longitude: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home_longitude' }})
    home_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'home_state' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    jersey: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jersey' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_name' }})
    position: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    recruit_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recruit_ids' }})
    team: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'team' }})
    weight: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weight' }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
