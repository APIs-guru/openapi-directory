from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class HeavyEquipmentsBuild:
    body_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'body_type' }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'category' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    drivetrain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'drivetrain' }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engine' }})
    fuel_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fuel_type' }})
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    sub_category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub_category' }})
    transmission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transmission' }})
    trim: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trim' }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
