from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Usd:
    r"""Usd
    Represents an amount of money in United States dollars.
    """
    
    cents: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cents') }})
    dollars: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Dollars') }})
    tenth_fractions_of_a_cent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TenthFractionsOfACent') }})
    
