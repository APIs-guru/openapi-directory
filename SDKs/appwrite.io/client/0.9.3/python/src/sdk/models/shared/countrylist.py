from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import country


@dataclass_json
@dataclass
class CountryList:
    countries: List[country.Country] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countries' }})
    sum: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sum' }})
    
