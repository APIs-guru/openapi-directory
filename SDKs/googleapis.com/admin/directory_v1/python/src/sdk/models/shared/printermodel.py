from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class PrinterModel:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    make_and_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'makeAndModel' }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    
