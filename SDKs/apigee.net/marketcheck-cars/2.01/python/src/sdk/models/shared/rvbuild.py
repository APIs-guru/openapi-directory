from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RvBuild:
    area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'area' }})
    class_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'class' }})
    engine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'engine' }})
    fuel_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fuel_type' }})
    gvwr: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gvwr' }})
    length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    made_in: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'made_in' }})
    make: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'make' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    sleeps: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sleeps' }})
    slideouts: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slideouts' }})
    transmission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'transmission' }})
    year: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'year' }})
    
