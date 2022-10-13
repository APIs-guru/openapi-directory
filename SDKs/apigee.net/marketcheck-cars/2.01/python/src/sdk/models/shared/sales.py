from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import salesstats
from . import salesstats
from . import salesstats


@dataclass_json
@dataclass
class Sales:
    city: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'city' }})
    counts: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'counts' }})
    cpo: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpo' }})
    dom_stats: Optional[salesstats.SalesStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dom_stats' }})
    inventory_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventory_type' }})
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make' }})
    miles_stats: Optional[salesstats.SalesStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'miles_stats' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    non_cpo: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'non-cpo' }})
    price_stats: Optional[salesstats.SalesStats] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price_stats' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    taxonomy_vin: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taxonomy_vin' }})
    trim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trim' }})
    year: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
