from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class HeavyEquipmentsBuild:
    r"""HeavyEquipmentsBuild
    Describes the Heavy Equipments specification
    """
    
    body_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('body_type') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('category') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    drivetrain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('drivetrain') }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('engine') }})
    fuel_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fuel_type') }})
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('make') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    sub_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub_category') }})
    transmission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('transmission') }})
    trim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trim') }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('year') }})
    
