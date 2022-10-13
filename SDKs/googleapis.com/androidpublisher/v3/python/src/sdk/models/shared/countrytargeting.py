from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CountryTargeting:
    countries: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'countries' }})
    include_rest_of_world: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includeRestOfWorld' }})
    
