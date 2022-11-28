from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Build:
    r"""Build
    Describes the Car specification
    """
    
    antibrake_sys: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('antibrake_sys') }})
    body_subtype: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_subtype') }})
    body_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_type') }})
    city_miles: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('city_miles') }})
    cylinders: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cylinders') }})
    doors: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('doors') }})
    drivetrain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drivetrain') }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    engine_aspiration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine_aspiration') }})
    engine_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine_block') }})
    engine_measure: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine_measure') }})
    engine_size: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine_size') }})
    fuel_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fuel_type') }})
    highway_miles: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('highway_miles') }})
    made_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('made_in') }})
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    opt_seating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opt_seating') }})
    overall_height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall_height') }})
    overall_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall_length') }})
    overall_width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('overall_width') }})
    short_trim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('short_trim') }})
    std_seating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('std_seating') }})
    steering_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steering_type') }})
    tank_size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tank_size') }})
    transmission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmission') }})
    trim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trim') }})
    trim_r: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trim_r') }})
    vehicle_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle_type') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
