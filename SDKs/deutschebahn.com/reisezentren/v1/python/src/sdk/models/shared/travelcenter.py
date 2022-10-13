from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TravelCenterOpeningTimes:
    fri: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fri' }})
    mon: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mon' }})
    sat: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sat' }})
    sun: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sun' }})
    thu: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'thu' }})
    tue: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tue' }})
    wed: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'wed' }})
    
class TravelCenterTypeEnum(str, Enum):
    REISEZENTRUM = "Reisezentrum"
    MOBILITY_CENTER = "Mobility Center"


@dataclass_json
@dataclass
class TravelCenter:
    address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'address' }})
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lat' }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lon' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    opening_times: Optional[TravelCenterOpeningTimes] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'openingTimes' }})
    post_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'postCode' }})
    type: Optional[TravelCenterTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
