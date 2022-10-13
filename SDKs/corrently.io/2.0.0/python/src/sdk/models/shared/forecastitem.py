from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ForecastItem:
    co2_g_oekostrom: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'co2_g_oekostrom' }})
    energyprice: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'energyprice' }})
    epochtime: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'epochtime' }})
    gsi: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gsi' }})
    scaled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scaled' }})
    sci: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sci' }})
    time_stamp: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeStamp' }})
    
