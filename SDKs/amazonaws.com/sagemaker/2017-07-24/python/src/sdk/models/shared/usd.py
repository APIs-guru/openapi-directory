from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Usd:
    cents: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Cents' }})
    dollars: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Dollars' }})
    tenth_fractions_of_a_cent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TenthFractionsOfACent' }})
    
