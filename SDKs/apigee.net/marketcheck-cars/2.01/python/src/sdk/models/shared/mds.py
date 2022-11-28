from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Mds:
    r"""Mds
    Describes Market days supply results for year make model trim combination
    """
    
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make') }})
    mds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mds') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    sold_vins: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sold_vins') }})
    total_active_cars_for_ymmt: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_active_cars_for_ymmt') }})
    total_cars_sold_in_last_45_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('total_cars_sold_in_last_45_days') }})
    trim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trim') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
