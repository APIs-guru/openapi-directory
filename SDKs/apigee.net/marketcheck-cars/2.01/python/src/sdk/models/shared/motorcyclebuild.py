from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class MotorcycleBuild:
    r"""MotorcycleBuild
    Describes the Motorcycle specification
    """
    
    body_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_type') }})
    cylinders: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cylinders') }})
    drivetrain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drivetrain') }})
    dry_weight: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dry_weight') }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    fuel_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fuel_type') }})
    made_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('made_in') }})
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    transmission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmission') }})
    trim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trim') }})
    vehicle_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle_type') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
