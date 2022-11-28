from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Sales:
    r"""Sales
    Sales count query response
    """
    
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city') }})
    counts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('counts') }})
    cpo: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cpo') }})
    dom_stats: Optional[SalesStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dom_stats') }})
    inventory_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inventory_type') }})
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make') }})
    miles_stats: Optional[SalesStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('miles_stats') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    non_cpo: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('non-cpo') }})
    price_stats: Optional[SalesStats] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('price_stats') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    taxonomy_vin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxonomy_vin') }})
    trim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trim') }})
    year: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
