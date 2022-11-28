from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BasePopular:
    r"""BasePopular
    Single popular car in array
    """
    
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    counts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counts') }})
    dom_stats: Optional[SalesStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dom_stats') }})
    inventory_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventoryType') }})
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make') }})
    miles_stats: Optional[SalesStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles_stats') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    price_stats: Optional[SalesStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_stats') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
