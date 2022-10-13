from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Dimensions:
    height: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'height' }})
    length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'length' }})
    unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unit' }})
    width: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'width' }})
    
