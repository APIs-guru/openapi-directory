from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import vehhistory


@dataclass_json
@dataclass
class VehHistoryData:
    data: List[vehhistory.VehHistory] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    vin: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vin' }})
    
