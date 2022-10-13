from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import continent


@dataclass_json
@dataclass
class ContinentList:
    continents: List[continent.Continent] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continents' }})
    sum: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    
