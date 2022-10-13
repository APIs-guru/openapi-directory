from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GeoLocation:
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lat' }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Lon' }})
    
